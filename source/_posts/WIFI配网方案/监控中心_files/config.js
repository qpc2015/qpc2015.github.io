var version = '396853963',
    versionJS = '396853966',
    basicPath = '/media/js/script',
    provincePath = '/media/js/echarts/chart/province',
    utilPath = '/media/js/script/util',
    mediaPath = '/media/js',
    isReLogin = true;
versionJS = versionJS === '' ? version : versionJS;
seajs.config({
  alias: {
    'basic': basicPath + '/common/basic.js',
    'basic-debug': basicPath + '/common/basic.debug.js',
    'common': basicPath + '/common/common.min.js',
    'common-debug': basicPath + '/common/common.js',
    'request': basicPath + '/lib/RequestDefine.js',
    'exRequest': basicPath + '/lib/requestApi.js',
    'httpService': basicPath + '/common/httpService.js',
    'httpService-debug': basicPath + '/common/httpService.debug.js',

    'asyncSlider': utilPath + '/asyncSlider.js',
    'city': utilPath + '/city.js',
    'cities': utilPath + '/cities.js',
    'new-city': utilPath + '/new-city.js',
    'counter': utilPath + '/jquery/jquery.counter.js',
    'cookie-sea': utilPath + '/jquery/cookie.sea.js',
    'cookie': utilPath + '/jquery/cookie.js',
    'easing': utilPath + '/jquery/easing.js',
    'flash': utilPath + '/jquery/jquery.flash.js',
    'angular': '/js-template/Angular-2.0.min.js',
    'handlebars': '/js-template/handlebars.js',
    'dot': '/js-template/doT.min.js',
    'jquery': utilPath + '/jquery/jquery-1.9.1.js',
    'jqueryFullPage': utilPath + '/jquery/jquery.fullPage.min.js',
    'queue': utilPath + '/jquery/jquery.plupload.queue.js',
    'simplePagination': utilPath + '/simplePagination.js',
    'validate': utilPath + '/jquery/jquery.validate.js',
    'mailSuggest': utilPath + '/mailSuggest.js',
    'lazyload': utilPath + '/jquery/jquery.lazyload.js',
    'radialIndicator': utilPath + '/jquery/radialIndicator.min.js',
    'slider': utilPath + '/unslider.min.js',
    'downCount': utilPath + '/downCount.js',
    'ajaxfileupload': utilPath + '/ajaxfileupload.js',
    'glDatePicker': utilPath + '/glDatePicker.js',
    'ZeroClipboard': utilPath + '/ZeroClipboard.js',
    'touchSlide': utilPath + '/TouchSlide.1.1.js',
    'low': utilPath + '/low.js',
    'ui-counter': utilPath + '/jquery/css/jquery.counter-analog.css',

    'drawCircle': mediaPath + '/drawCircle.js',
    'echarts-all': mediaPath + '/echarts-all-3.js',
    'echarts-dataTool': mediaPath + '/dataTool.min.js',
    'echarts-radialIndicator': mediaPath + '/radialIndicator.min.js',
    'echarts-echarts': mediaPath + '/echarts/echarts.js',
    'echarts-bar': mediaPath + '/echarts/chart/bar.js',
    'echarts-line':mediaPath + '/line.js',
    'echarts-bmap':mediaPath + '/bmap.min.js',
    'echarts-pinyin':mediaPath + '/pinyin.js',
    'echarts-china': mediaPath + '/echarts/chart/province/China.js',

    'AnHui' : provincePath + '/AnHui.js',
    'AoMen' : provincePath + '/AoMen.js',
    'Beijing' : provincePath + '/Beijing.js',
    'ChongQing' : provincePath + '/ChongQing.js',
    'FuJian' : provincePath + '/FuJian.js',
    'GanSu' : provincePath + '/GanSu.js',
    'GuangDong' : provincePath + '/GuangDong.js',
    'GuangXi' : provincePath + '/GuangXi.js',
    'GuangZhou' : provincePath + '/GuangZhou.js',
    'GuiZhou' : provincePath + '/GuiZhou.js',
    'HaiNan' : provincePath + '/HaiNan.js',
    'HeBei' : provincePath + '/HeBei.js',
    'HeiLongJiang' : provincePath + '/HeiLongJiang.js',
    'HeNan' : provincePath + '/HeNan.js',
    'HuBei' : provincePath + '/HuBei.js',
    'HuNan' : provincePath + '/HuNan.js',
    'JiangSu' : provincePath + '/JiangSu.js',
    'JiangXi' : provincePath + '/JiangXi.js',
    'JiLin' : provincePath + '/JiLin.js',
    'LiaoNing' : provincePath + '/LiaoNing.js',
    'NeiMengGu' : provincePath + '/NeiMengGu.js',
    'NingXia' : provincePath + '/NingXia.js',
    'QingHai' : provincePath + '/QingHai.js',
    'ShanDong' : provincePath + '/ShanDong.js',
    'ShangHai' : provincePath + '/ShangHai.js',
    'ShanXi' : provincePath + '/ShanXi.js',
    'ShanXi1' : provincePath + '/ShanXi1.js',
    'SiChuan' : provincePath + '/SiChuan.js',
    'TianJin' : provincePath + '/TianJin.js',
    'XiangGang' : provincePath + '/XiangGang.js',
    'XiZang' : provincePath + '/XiZang.js',
    'XinJiang' : provincePath + '/XinJiang.js',
    'YunNan' : provincePath + '/YunNan.js',
    'ZheJiang' : provincePath + '/ZheJiang.js'
  },
  map: [
     [/^(.*(script|util|common|lib|sea|jquery|media|js|).*\.js)(.*)$/i, '$1?v=' + new Date().getTime()]
  ],
  preload: ['jquery']
});