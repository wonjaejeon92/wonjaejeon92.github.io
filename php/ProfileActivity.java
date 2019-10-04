package e.t.gameworkshop;


import android.content.pm.ActivityInfo;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.RequestQueue;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class ProfileActivity extends AppCompatActivity {

    private static final String TAG = "@@@@@@@@@";
    TextView textID, textLevel, textExp;
    ProgressBar progressExp;
    String userID;
    int userLevel, userExp;
    private RequestQueue queue;
    private Map<String, String> parameters = new HashMap<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT); // 세로 모드 고정
        setContentView(R.layout.activity_profile);

        textID = (TextView) findViewById(R.id.textID);
        textLevel = (TextView) findViewById(R.id.textLevel);
        textExp = (TextView) findViewById(R.id.textExp);
        progressExp = (ProgressBar) findViewById(R.id.progressExp);

        parameters.put("userID", userID);
        JSONObject jsonObject = new JSONObject(parameters);

        queue = Volley.newRequestQueue(this);
        String url = "https://start1a.cafe24.com/Profiles.php";


        // 다른 액티비티 변수를 가져옴
//        userID = ((MainActivity) MainActivity.context).userID;
//        // 아이디 출력
//        textID.setText(userID);




        final JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.GET, url, jsonObject, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Log.d(TAG,response.toString());
                try {
                    userID = response.getString("userID");
                    textID.setText(userID);
                    queue.stop();
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                textID.setText("Error!");
                error.printStackTrace();
                queue.start();

            }
        });
        jsonObjectRequest.setTag(TAG);
        queue.add(jsonObjectRequest);
//        Toast.makeText(this,queue + ":message", Toast.LENGTH_LONG).show();
    }


    @Override
    protected void onStop() {
        super.onStop();
        if (queue != null){
            queue.cancelAll(TAG);
        }
    }

}