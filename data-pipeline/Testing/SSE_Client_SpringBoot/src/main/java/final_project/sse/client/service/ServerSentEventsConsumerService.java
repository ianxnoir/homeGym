package final_project.sse.client.service;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;


@Service
@RequiredArgsConstructor
public class ServerSentEventsConsumerService {
    private final WebClient webClient;
    private ParameterizedTypeReference<ServerSentEvent<String>> type = new ParameterizedTypeReference<>() {
    };
    public Flux<ServerSentEvent<String>> consume(){
        return webClient.get()
                .uri("/stream")
                .retrieve()
                .bodyToFlux(type);
    }
}
