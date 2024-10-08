let twd_jpy_line = document.getElementById('line-chart');
let twd_jpy_data = JSON.parse(document.getElementById('exchangeData').innerHTML);

console.log(twd_jpy_data);   

let trace1 = {};
trace1.type = "scatter";
trace1.mode = "lines";
trace1.name = "Team A";

trace1.text = [];

trace1.x = [];
trace1.y = [];

for (let i = 0; i < twd_jpy_data.length; i++) {    //x,y軸的資料
    trace1.x[i] = twd_jpy_data[i].date;
    trace1.y[i] = twd_jpy_data[i]['twd-jpy'];
}

console.log("trace1.x: ", trace1.x);
console.log("trace1.y: ", trace1.y);

let data = [];
data.push(trace1);

let layout = {
    margin: {
        t: 0
    },
    xaxis:{
        showline:true
    },
    yaxis:{
        showline:true
    },
    annotations:[  //用annotations比較好去做調整
        {
            xref:'paper',   
            yref:'paper',
            x:0.5,
            y:0.1,
            text: `JPY Exchange ${trace1.x[0]} ~ ${trace1.x.slice(-1)}`,  //${......} 傳入參數的意思
            showarrow:false,
            xanchor:'center',
            yanchor:'top',
            font:{
                size:15,
                color:'gray'
            }
        }
    ]
};

Plotly.newPlot(twd_jpy_line, data, layout);


