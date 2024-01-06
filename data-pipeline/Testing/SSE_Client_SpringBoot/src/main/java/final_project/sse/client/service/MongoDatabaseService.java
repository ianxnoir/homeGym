package final_project.sse.client.service;

import com.mongodb.client.MongoDatabase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MongoDatabaseService {
    private MongoDatabase mongoDB;

    @Autowired
    public MongoDatabaseService(MongoDatabase mongoDatabase){
        this.mongoDB = mongoDatabase;
    }

}
