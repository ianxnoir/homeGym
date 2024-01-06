package final_project.sse.service;

import okhttp3.*;
import okhttp3.sse.EventSource;
import okhttp3.sse.EventSourceListener;
import okhttp3.sse.EventSources;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.util.concurrent.ListenableFuture;

@Service
public class SSE_Client_registered_std {
    private OkHttpClient client;
    private MediaType JSON;
    private JSONObject json;
    private RequestBody requestBody;
    private Request request;
    private EventSourceListener eventSourceListener;
    private static Logger logger = LoggerFactory.getLogger(SSE_Client_registered_std.class);

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public SSE_Client_registered_std() {
        this.client = new OkHttpClient();
        this.JSON = MediaType.get("application/json; charset=utf-8");
        this.json = new JSONObject("{\"password\":\"HomeGymStd\"}");
        this.requestBody = RequestBody.create(this.json.toString(), this.JSON);
        this.request = new Request.Builder()
//                .url("http://192.168.59.161:8080/stream/std")
//                .url("http://localhost:8078/stream/std")
                .url("https://api.ellie-lam.site/stream/std")
                .post(this.requestBody)
                .build();
    }

    @Scheduled(initialDelay = 1000, fixedDelay = Long.MAX_VALUE)
    public void startTheProcess() {
        createEventSource();
        start();
    }

    public void createEventSource() {
        this.eventSourceListener = new EventSourceListener() {
            @Override
            public void onClosed(@NotNull EventSource eventSource) {
                System.out.println("onClosed, start again automatically.");
                start();
            }

            @Override
            public void onEvent(@NotNull EventSource eventSource, @Nullable String id, @Nullable String type, @NotNull String data) {
                if (!data.equals("\"keeping\"")) {
                    System.out.println("(student) new income data: " + data);
                    try {
                        ListenableFuture<SendResult<String, String>> result = kafkaTemplate.send("student", data);
                        result.addCallback(successResult -> { // .then handler
                            logger.info("Message sent to student successfully");
                        }, error -> {// .catch handler
                            logger.error(error.getMessage());
                        });
                    } catch (Exception e) {
                        logger.error(e.getMessage());
                    }
                }
            }

            @Override
            public void onFailure(@NotNull EventSource eventSource, @Nullable Throwable t, @Nullable Response response) {
                System.out.println("SSE_student terminated");
            }

            @Override
            public void onOpen(@NotNull EventSource eventSource, @NotNull Response response) {
                System.out.println("onOpen, started SSE_student");
            }
        };
    }

    public void start() {
        EventSources.createFactory(this.client).newEventSource(this.request, this.eventSourceListener);
    }
}
