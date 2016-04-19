function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5i8VA9N5mYu":
        Script1();
        break;
  }
}

function Script1()
{
  public class MainActivity extends Activity {
   private WebView myWebView;

   @Override		
   protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);
      myWebView = (WebView) findViewById(R.id.webview);
      // Configure related browser settings
      myWebView.getSettings().setLoadsImagesAutomatically(true);
      myWebView.getSettings().setJavaScriptEnabled(true);
      myWebView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);
      // Configure the client to use when opening URLs
      myWebView.setWebViewClient(new MyBrowser());
      // Load the initial URL
      myWebView.loadUrl("http://www.example.com");
   }
   
   // Manages the behavior when URLs are loaded
   private class MyBrowser extends WebViewClient {
      @Override
      public boolean shouldOverrideUrlLoading(WebView view, String url) {
         view.loadUrl(url);
         return true;
      }
   }
}
}

