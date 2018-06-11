// http module should be installed:
// npm i http

// Params:
// your anti-captcha.com account key
const anticaptcha = require('./anticaptcha')('d84bb49536006ed4bb5795de87f11fec');

//recaptcha key from target website
//anticaptcha.setWebsiteURL("http://www.bcra.gov.ar/BCRAyVos/Situacion_Crediticia.asp");
anticaptcha.setWebsiteURL("http://http.myjino.ru/recaptcha/test-get.php");
anticaptcha.setWebsiteKey("6Lc_aCMTAAAAABx7u2W0WPXnVbI_v6ZdbM6rYf16");

//proxy access parameters
anticaptcha.setProxyType("http");
anticaptcha.setProxyAddress("127.0.0.1");
anticaptcha.setProxyPort(5050);
anticaptcha.setProxyLogin("");
anticaptcha.setProxyPassword("");

//browser header parameters
anticaptcha.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116");
anticaptcha.setCookies("anticaptcha=cool; cookies=set");

// check balance first
anticaptcha.getBalance((err, balance)=>{
    if (err) {
        console.error(err);
        return;
    }

    if (balance > 0) {
        anticaptcha.createTask((err, taskId)=>{
            if (err) {
                console.error(err);
                return;
            }

            console.log(taskId);

            anticaptcha.getTaskSolution(taskId, (err, taskSolution)=>{
                if (err) {
                    console.error(err);
                    return;
                }

                console.log(taskSolution);
            });
        });
    }
});