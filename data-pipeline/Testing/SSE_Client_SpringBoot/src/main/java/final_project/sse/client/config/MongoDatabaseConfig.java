package final_project.sse.client.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MongoDatabaseConfig {
    @Bean
    public MongoDatabase mongoDatabase(){
        MongoClient client = MongoClients.create("mongodb://localhost:27017");
        MongoDatabase local = client.getDatabase("local");
        return local;
    }
}
