export default (tem: string, js: string) => `<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
  <script src="https://unpkg.com/@fe6/water@0.17.7/dist/lib/water.umd.js"></script>
  <link href="https://unpkg.com/@fe6/water@0.17.7/dist/lib/water.css" rel="stylesheet">
</head>
<body style="margin: 36px 24px;">
  <div id="app">
    ${tem}
  </div>
  <script>
    Vue.use(water.default);
    new Vue(${js}).$mount('#app');
  </script>
  <style>
  .demo-grid-first { margin-top: 24px !important; }
  .demo-grid-second { margin-top: 16px !important; }
  .demo-grid-row {
    margin-bottom: 8px;
    background-image: linear-gradient(90deg, #f5f5f5 4.16666667%, transparent 0, transparent 8.33333333%, #f5f5f5 0, #f5f5f5 12.5%, transparent 0, transparent 16.66666667%, #f5f5f5 0, #f5f5f5 20.83333333%, transparent 0, transparent 25%, #f5f5f5 0, #f5f5f5 29.16666667%, transparent 0, transparent 33.33333333%, #f5f5f5 0, #f5f5f5 37.5%, transparent 0, transparent 41.66666667%, #f5f5f5 0, #f5f5f5 45.83333333%, transparent 0, transparent 50%, #f5f5f5 0, #f5f5f5 54.16666667%, transparent 0, transparent 58.33333333%, #f5f5f5 0, #f5f5f5 62.5%, transparent 0, transparent 66.66666667%, #f5f5f5 0, #f5f5f5 70.83333333%, transparent 0, transparent 75%, #f5f5f5 0, #f5f5f5 79.16666667%, transparent 0, transparent 83.33333333%, #f5f5f5 0, #f5f5f5 87.5%, transparent 0, transparent 91.66666667%, #f5f5f5 0, #f5f5f5 95.83333333%, transparent 0);
  }
  .demo-grid-col {
    color: #333;
  }
  .demo-grid-col:nth-of-type(odd) {
    color: #fff;
    background: rgba(25, 150, 249, 0.5);
  }
  .demo-grid-text {
    padding: 30px 0;
    text-align: center;
    font-size: 30px;
    line-height: 1;
  }
  .demo-grid-box {
    background: rgba(25, 150, 249, 0.8);
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 5px 0;
  }
  .demo-grid-box2 {
    background: rgba(25, 150, 249, 0.4);
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 5px 0;
  }
  
  </style>
</body>
</html>`;
