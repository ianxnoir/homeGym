package final_project.sse.form;

import org.bson.Document;
import org.json.JSONObject;

public class DataForm {
    private JSONObject myData;
    private int createdTime;
    private int column1Data;
    private int column2Data;
    private int column3Data;
    private int column4Data;
    private int column5Data;

    public DataForm(String data) {
        this.myData = new JSONObject(data);
        this.createdTime = myData.getInt("create_at");
        this.column1Data = myData.getInt("column1");
        this.column2Data = myData.getInt("column2");
        this.column3Data = myData.getInt("column3");
        this.column4Data = myData.getInt("column4");
        this.column5Data = myData.getInt("column5");
    }

    public Document toDocument() {
        Document document = new Document();
        document.put("createdTime", createdTime);
        document.put("column1Data", column1Data);
        document.put("column2Data", column2Data);
        document.put("column3Data", column3Data);
        document.put("column4Data", column4Data);
        document.put("column5Data", column5Data);
        return document;
    }
}
