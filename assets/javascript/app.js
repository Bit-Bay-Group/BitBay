$(document).ready(function() {

	// your code goes within the doc ready
      // all of our code goes within the doc ready

//--------------------Blockchain API GET request-------------
// Chain all ajax request inside of $.when()
// Manipulate all responses inside of .then(function(){});
           //API URL links    
      var bitQueryURL = "https://api.blockchain.info/stats?cors=true";
      var priceGraphURL = "https://api.blockchain.info/charts/market-price?timespan=30days&format=json&cors=true";
      var hashURL = "https://api.blockchain.info/pools?timespan=10days&cors=true";
      var transactionURL = "https://api.blockchain.info/charts/n-transactions?timespan=30days&cors=true";
      var outputURL = "https://api.blockchain.info/charts/output-volume?timespan=30days&cors=true";
      //API output variables
      var gStats;
      var priceGraph;
      var hashPool;
      var transactionCount;
      var outputValue;
      
      



     $.when(
      //General Stats
      $.ajax({
          url: bitQueryURL,
          method: "GET"
        }).done(function(json1){
          gStats = json1
        }),
      //Price graph
      $.ajax({
          url: priceGraphURL,
          method: "GET"
       }).done(function(json2){
          priceGraph = json2
        }),
      //Hash pools vs hashrate
      $.ajax({
          url: hashURL,
          method: "GET"
        }).done(function(json3){
          hashPool = json3
      }),
      //Transactions count linegraph
      $.ajax({
          url: transactionURL,
          method: "GET"
      }).done(function(json4){
          transactionCount = json4
      }),
      // Output value linegraph
      $.ajax({
          url: outputURL,
          method: "GET"
      }).done(function(json5){
          outputValue = json5

        //Console logging for debugging/developing
        //console.log(gStats);
        //console.log(priceGraph);
        //console.log(hashPool["1Hash"],hashPool["58COIN"]);
        //console.log(transactionCount);
       // console.log(outputValue);
       //console.log(hashPool);
        
      })
      //Function converts JSON date outputs into a usable format organized in an array.
     ).then(function() {
      var dateRange = [];
      var convert;
      for (var i = 0; i < transactionCount.values.length; i++) {
      convert = moment.unix(transactionCount.values[i].x).format("MMM Do");
      dateRange.push(convert);
      }
      var marketValue30Day = [];
      for (var i = 0; i < priceGraph.values.length; i++) {
      marketValue30Day.push(priceGraph.values[i].y);
      }
      var hashPoolNameList = ["1Hash", "58COIN","AntPool","BTC.TOP","BTC.com","BTCC Pool","BW.COM","BitClub NEtwork","BitFury","Bitcoin India","Bitcoin.com","BitcoinRussia","CKPool","F2Pool","GBMiners","KanoPool","SlushPool","Solo CKPool","Unknown","ViaBTC","Waterhole"];
      var hashPoolValueList = [];
      hashPoolValueList[0] = hashPool["1Hash"];
      hashPoolValueList[1] = hashPool["58COIN"];
      hashPoolValueList[2] = hashPool["AntPool"];
      hashPoolValueList[3] = hashPool["BTC.TOP"];
      hashPoolValueList[4] = hashPool["BTC.com"];
      hashPoolValueList[5] = hashPool["BTCC Pool"];
      hashPoolValueList[6] = hashPool["BW.COM"];
      hashPoolValueList[7] = hashPool["BitClub Network"];
      hashPoolValueList[8] = hashPool["BitFury"];
      hashPoolValueList[9] = hashPool["Bitcoin India"];
      hashPoolValueList[10] = hashPool["Bitcoin.com"];
      hashPoolValueList[11] = hashPool["BitcoinRussia"];
      hashPoolValueList[12] = hashPool["CKPool"];
      hashPoolValueList[13] = hashPool["F2Pool"];
      hashPoolValueList[14] = hashPool["GBMiners"];
      hashPoolValueList[15] = hashPool["KanoPool"];
      hashPoolValueList[16] = hashPool["SlushPool"];
      hashPoolValueList[17] = hashPool["Solo CKPool"];
      hashPoolValueList[18] = hashPool["Unknown"];
      hashPoolValueList[19] = hashPool["ViaBTC"];
      hashPoolValueList[20] = hashPool["Waterhole"];
      
     

      // var hashPoolValueList = ["hashPool["1Hash"]";
       //console.log(hashPool);
       //console.log(dateRange);
       //console.log(marketValue30Day);
       // console.log(hashPool.length);

      });
      




    // how to convert unix time to any format for chart axis
    // var time = moment.unix(1513140162).format("MMM Do");

});
