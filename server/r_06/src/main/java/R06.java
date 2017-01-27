
import com.beust.jcommander.JCommander;
import com.beust.jcommander.Parameter;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import spark.Request;

import java.io.IOException;
import java.io.StringWriter;
import java.util.Date;
import java.util.Set;

import static spark.Spark.*;

class MyResponseData {
    private int sleep;
    private String ip;
    private Date dateStart;
    private Date dateEnde;
    private String protokoll;
    private Set<String> headers;

    MyResponseData (String ip,Date dateStart,int sleep,String protokoll,Set<String> headers) {
        this.dateStart = dateStart;
        this.ip = ip;
        this.dateEnde = new Date();
        this.sleep = sleep;
        this.protokoll = protokoll;
        this.headers = headers;
    }

    public int getSleep() {
        return sleep;
    }

    public String getIp() {
        return ip;
    }

    public Date getDateStart() {
        return dateStart;
    }

    public Date getDateEnde() {
        return dateEnde;
    }

    public String getProtokoll() {
        return protokoll;
    }

    public Set<String> getHeaders() {
        return headers;
    }
}

public class R06 {
    @Parameter(names={"--port", "-p"})
    int port=8081;

    public static void main(String[] args) {
        R06 server = new R06();
        new JCommander(server, args);
        port(server.port);

        System.out.println("hello :-)");
        System.out.println("You can query my over:\n http://localhost:"+server.port+"/hello");
        System.out.println("If the response should wait 5s try:\n http://localhost:"+server.port+"/hello?sleep=5");

        get("/hello", (request, response) -> {
            Date startDate = new Date();
            int sleepTime = ggfDoSleep(request);
            response.status(200);
            response.type("application/json");
            String ipAddr = request.ip();
            String protokoll = request.protocol();
            Set<String> headers = request.headers();
            MyResponseData data = new MyResponseData(ipAddr,startDate,sleepTime,protokoll,headers);
            return dataToJson(data);
        });
        post("/hello", (request, response) -> {
            Date startDate = new Date();
            int sleepTime = ggfDoSleep(request);
            response.status(200);
            response.type("application/json");
            String ipAddr = request.ip();
            String protokoll = request.protocol();
            Set<String> headers = request.headers();
            MyResponseData data = new MyResponseData(ipAddr,startDate,sleepTime,protokoll,headers);
            return dataToJson(data);
        });

    }

    private static int ggfDoSleep(Request request) throws InterruptedException {
        String sleepSecondsStr = request.queryParams(SLEEP);
        int sleepSeconds = 0;
        try {
            sleepSeconds = Integer.parseInt(sleepSecondsStr);
        }
        catch(Exception ignore) {
        }

        if (sleepSeconds>0 && sleepSeconds<60) {
            Thread.sleep(sleepSeconds*1000);
            return sleepSeconds;
        }
        else
            return 0;
    }

    private static String dataToJson(Object data) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.enable(SerializationFeature.INDENT_OUTPUT);
            StringWriter sw = new StringWriter();
            mapper.writeValue(sw, data);
            return sw.toString();
        } catch (IOException e) {
            throw new RuntimeException("IOException from a StringWriter?");
        }
    }

    private final static String SLEEP="sleep";
}