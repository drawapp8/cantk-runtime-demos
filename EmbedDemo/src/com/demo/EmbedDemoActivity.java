package com.demo;

import android.app.Activity;
import android.os.Bundle;
import android.content.Intent;
import android.widget.Button;
import android.view.View; 
import android.view.View.OnClickListener; 
import com.tangide.GameRunnerActivity;

public class EmbedDemoActivity extends Activity
{
	private Button button1,button2;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.main);
		
		button1=(Button) this.findViewById(R.id.button1);
		button2=(Button) this.findViewById(R.id.button2);
		
		button1.setOnClickListener(new MyListener());
		button2.setOnClickListener(new MyListener());
	}
	
	private class MyListener implements View.OnClickListener{
	
		public void onClick(View v) {
			Intent intent = new Intent();
			Bundle bundle = new Bundle();  

			if(v==button1){
				intent.setClass(EmbedDemoActivity.this, GameRunnerActivity.class);
				bundle.putString("url", "file:///mnt/sdcard-ext/cantk-rt-root/game1/index.html");  
			}else{
				intent.setClass(EmbedDemoActivity.this, GameRunnerActivity.class);
				bundle.putString("url", "file:///mnt/sdcard-ext/cantk-rt-root/game2/index.html");  
			}
			
			intent.putExtras(bundle); 
			startActivity(intent);
		}
	 }
}

