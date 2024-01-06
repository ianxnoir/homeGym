package final_project.sse.client;

import final_project.sse.client.service.ServerSentEventsConsumerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.codec.ServerSentEvent;
import reactor.core.publisher.Flux;

import java.time.LocalTime;
//https://josdem.io/techtalk/spring/spring_boot_sse_client/
@Slf4j
@SpringBootApplication
public class ServerSentEventsClientApplication {

    public static void main(String[] args){
        SpringApplication.run(ServerSentEventsClientApplication.class, args);
    }

    @Bean
    CommandLineRunner start(ServerSentEventsConsumerService service){
        return args -> {
            Flux<ServerSentEvent<String>> eventStream = service.consume();

            eventStream.subscribe(ctx->
                    log.info("Current time: {}, content[{}] ", LocalTime.now(), ctx.data())
            );
        };
    }

}
