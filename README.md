cdn url--->https://cdn.jsdelivr.net/gh/mahlafaridani2006/progress-bar-plugin/src/js/index.js
html--->
<div class="progress">
    <div id="element-id"></div>
</div>

css--->
.progress{
    width: 500px;
    height: 40px;
    border: 1px solid green;
}
.progress div{
    height:100% ;
    width: 0%;
    background-color: green;
    line-height: 40px;
    text-align: center;
}
jquery--->
$('#element-id').progress({commenceNum: 0, endNum: 90,selector:'#element-id'});