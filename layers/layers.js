var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_AraziYzeyScakl30m25032025_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Arazi Yüzey Sıcaklığı (30m) - 25.03.2025<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_0.png" /> 41,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_1.png" /> 41,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_2.png" /> 41,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_3.png" /> 41,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_4.png" /> 40,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_5.png" /> 40,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_6.png" /> 40,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_7.png" /> 40,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_8.png" /> 39,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_9.png" /> 39,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_10.png" /> 39,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_11.png" /> 39,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_12.png" /> 38,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_13.png" /> 38,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_14.png" /> 38,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_15.png" /> 38,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_16.png" /> 37,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_17.png" /> 37,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_18.png" /> 37,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_19.png" /> 37,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_20.png" /> 36,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_21.png" /> 36,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_22.png" /> 36,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_23.png" /> 35,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_24.png" /> 35,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_25.png" /> 35,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_26.png" /> 35,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_27.png" /> 34,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_28.png" /> 34,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_29.png" /> 34,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_30.png" /> 34,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_31.png" /> 33,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_32.png" /> 33,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_33.png" /> 33,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_34.png" /> 33,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_35.png" /> 32,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_36.png" /> 32,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_37.png" /> 32,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_38.png" /> 32,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_39.png" /> 31,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_40.png" /> 31,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_41.png" /> 31,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_42.png" /> 31,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_43.png" /> 30,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_44.png" /> 30,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_45.png" /> 30,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_46.png" /> 30,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_47.png" /> 29,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_48.png" /> 29,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_49.png" /> 29,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_50.png" /> 29,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m25032025_1_51.png" /> 28,9°C<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AraziYzeyScakl30m25032025_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3210638.954981, 5042836.655124, 3213050.205999, 5045804.763742]
        })
    });
var lyr_AraziYzeyScakl30m18042025_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Arazi Yüzey Sıcaklığı (30m) - 18.04.2025<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_0.png" /> 2,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_1.png" /> 2,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_2.png" /> 2,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_3.png" /> 2,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_4.png" /> 2,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_5.png" /> 2,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_6.png" /> 3,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_7.png" /> 3,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_8.png" /> 3,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_9.png" /> 3,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_10.png" /> 3,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_11.png" /> 3,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_12.png" /> 3,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_13.png" /> 3,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_14.png" /> 3,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_15.png" /> 3,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_16.png" /> 3,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_17.png" /> 3,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_18.png" /> 3,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_19.png" /> 3,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_20.png" /> 3,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_21.png" /> 4,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_22.png" /> 4,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_23.png" /> 4,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_24.png" /> 4,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_25.png" /> 4,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_26.png" /> 4,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_27.png" /> 4,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_28.png" /> 4,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_29.png" /> 4,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_30.png" /> 4,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_31.png" /> 4,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_32.png" /> 4,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_33.png" /> 4,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_34.png" /> 4,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_35.png" /> 4,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_36.png" /> 5,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_37.png" /> 5,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_38.png" /> 5,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_39.png" /> 5,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_40.png" /> 5,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_41.png" /> 5,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_42.png" /> 5,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_43.png" /> 5,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_44.png" /> 5,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_45.png" /> 5,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_46.png" /> 5,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_47.png" /> 5,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_48.png" /> 5,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_49.png" /> 5,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_50.png" /> 5,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m18042025_2_51.png" /> 6,0°C<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AraziYzeyScakl30m18042025_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3210638.954981, 5042836.655124, 3213050.205999, 5045804.763742]
        })
    });
var lyr_AraziYzeyScakl10m28052025_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Arazi Yüzey Sıcaklığı (10m) - 28.05.2025<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_0.png" /> 17,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_1.png" /> 17,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_2.png" /> 18,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_3.png" /> 18,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_4.png" /> 19,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_5.png" /> 19,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_6.png" /> 19,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_7.png" /> 20,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_8.png" /> 20,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_9.png" /> 21,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_10.png" /> 21,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_11.png" /> 22,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_12.png" /> 22,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_13.png" /> 23,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_14.png" /> 23,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_15.png" /> 24,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_16.png" /> 24,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_17.png" /> 25,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_18.png" /> 25,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_19.png" /> 26,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_20.png" /> 26,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_21.png" /> 27,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_22.png" /> 27,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_23.png" /> 28,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_24.png" /> 28,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_25.png" /> 29,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_26.png" /> 29,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_27.png" /> 30,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_28.png" /> 30,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_29.png" /> 30,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_30.png" /> 31,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_31.png" /> 31,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_32.png" /> 32,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_33.png" /> 32,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_34.png" /> 33,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_35.png" /> 33,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_36.png" /> 34,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_37.png" /> 34,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_38.png" /> 35,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_39.png" /> 35,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_40.png" /> 36,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_41.png" /> 36,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_42.png" /> 37,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_43.png" /> 37,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_44.png" /> 38,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_45.png" /> 38,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_46.png" /> 39,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_47.png" /> 39,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_48.png" /> 40,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_49.png" /> 40,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_50.png" /> 41,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m28052025_3_51.png" /> 41,4°C<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AraziYzeyScakl10m28052025_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3210672.273126, 5042844.029319, 3213016.876756, 5045797.394716]
        })
    });
var lyr_AraziYzeyScakl30m28052025_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Arazi Yüzey Sıcaklığı (30m) - 28.05.2025<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_0.png" /> 27,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_1.png" /> 27,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_2.png" /> 27,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_3.png" /> 27,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_4.png" /> 27,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_5.png" /> 28,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_6.png" /> 28,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_7.png" /> 28,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_8.png" /> 28,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_9.png" /> 29,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_10.png" /> 29,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_11.png" /> 29,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_12.png" /> 29,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_13.png" /> 30,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_14.png" /> 30,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_15.png" /> 30,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_16.png" /> 30,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_17.png" /> 30,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_18.png" /> 31,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_19.png" /> 31,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_20.png" /> 31,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_21.png" /> 31,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_22.png" /> 32,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_23.png" /> 32,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_24.png" /> 32,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_25.png" /> 32,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_26.png" /> 33,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_27.png" /> 33,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_28.png" /> 33,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_29.png" /> 33,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_30.png" /> 34,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_31.png" /> 34,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_32.png" /> 34,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_33.png" /> 34,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_34.png" /> 34,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_35.png" /> 35,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_36.png" /> 35,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_37.png" /> 35,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_38.png" /> 35,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_39.png" /> 36,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_40.png" /> 36,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_41.png" /> 36,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_42.png" /> 36,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_43.png" /> 37,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_44.png" /> 37,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_45.png" /> 37,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_46.png" /> 37,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_47.png" /> 37,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_48.png" /> 38,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_49.png" /> 38,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_50.png" /> 38,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m28052025_4_51.png" /> 38,9°C<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AraziYzeyScakl30m28052025_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3210638.954981, 5042836.655124, 3213050.205999, 5045804.763742]
        })
    });
var lyr_AraziYzeyScakl10m13062025_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Arazi Yüzey Sıcaklığı (10m) - 13.06.2025<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_0.png" /> 27,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_1.png" /> 28,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_2.png" /> 28,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_3.png" /> 28,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_4.png" /> 28,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_5.png" /> 29,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_6.png" /> 29,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_7.png" /> 29,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_8.png" /> 30,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_9.png" /> 30,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_10.png" /> 30,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_11.png" /> 30,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_12.png" /> 31,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_13.png" /> 31,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_14.png" /> 31,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_15.png" /> 31,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_16.png" /> 32,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_17.png" /> 32,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_18.png" /> 32,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_19.png" /> 32,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_20.png" /> 33,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_21.png" /> 33,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_22.png" /> 33,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_23.png" /> 33,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_24.png" /> 34,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_25.png" /> 34,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_26.png" /> 34,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_27.png" /> 35,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_28.png" /> 35,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_29.png" /> 35,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_30.png" /> 35,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_31.png" /> 36,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_32.png" /> 36,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_33.png" /> 36,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_34.png" /> 36,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_35.png" /> 37,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_36.png" /> 37,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_37.png" /> 37,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_38.png" /> 37,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_39.png" /> 38,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_40.png" /> 38,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_41.png" /> 38,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_42.png" /> 38,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_43.png" /> 39,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_44.png" /> 39,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_45.png" /> 39,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_46.png" /> 40,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_47.png" /> 40,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_48.png" /> 40,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_49.png" /> 40,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_50.png" /> 41,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl10m13062025_5_51.png" /> 41,3°C<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AraziYzeyScakl10m13062025_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3210672.273126, 5042844.029319, 3213016.876756, 5045797.394716]
        })
    });
var lyr_AraziYzeyScakl30m13062025_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Arazi Yüzey Sıcaklığı (30m) - 13.06.2025<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_0.png" /> 29,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_1.png" /> 29,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_2.png" /> 29,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_3.png" /> 29,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_4.png" /> 30,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_5.png" /> 30,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_6.png" /> 30,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_7.png" /> 30,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_8.png" /> 30,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_9.png" /> 31,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_10.png" /> 31,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_11.png" /> 31,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_12.png" /> 31,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_13.png" /> 32,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_14.png" /> 32,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_15.png" /> 32,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_16.png" /> 32,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_17.png" /> 32,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_18.png" /> 33,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_19.png" /> 33,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_20.png" /> 33,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_21.png" /> 33,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_22.png" /> 34,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_23.png" /> 34,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_24.png" /> 34,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_25.png" /> 34,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_26.png" /> 34,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_27.png" /> 35,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_28.png" /> 35,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_29.png" /> 35,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_30.png" /> 35,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_31.png" /> 36,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_32.png" /> 36,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_33.png" /> 36,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_34.png" /> 36,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_35.png" /> 36,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_36.png" /> 37,1°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_37.png" /> 37,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_38.png" /> 37,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_39.png" /> 37,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_40.png" /> 38,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_41.png" /> 38,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_42.png" /> 38,5°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_43.png" /> 38,7°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_44.png" /> 38,9°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_45.png" /> 39,2°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_46.png" /> 39,4°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_47.png" /> 39,6°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_48.png" /> 39,8°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_49.png" /> 40,0°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_50.png" /> 40,3°C<br />\
    <img src="styles/legend/AraziYzeyScakl30m13062025_6_51.png" /> 40,5°C<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AraziYzeyScakl30m13062025_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3210638.954981, 5042836.655124, 3213050.205999, 5045804.763742]
        })
    });
var lyr_ScakNoktalar3StdSapmazeri_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sıcak Noktalar (3 Std. Sapma Üzeri)<br />\
    <img src="styles/legend/ScakNoktalar3StdSapmazeri_7_0.png" /> 0,0000<br />\
    <img src="styles/legend/ScakNoktalar3StdSapmazeri_7_1.png" /> 1,0000<br />\
    <img src="styles/legend/ScakNoktalar3StdSapmazeri_7_2.png" /> 2,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ScakNoktalar3StdSapmazeri_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3210672.273126, 5042844.029319, 3213016.876756, 5045797.394716]
        })
    });
var lyr_ScakNoktalar2StdSapmazeri_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sıcak Noktalar (2 Std. Sapma Üzeri)<br />\
    <img src="styles/legend/ScakNoktalar2StdSapmazeri_8_0.png" /> 0,0<br />\
    <img src="styles/legend/ScakNoktalar2StdSapmazeri_8_1.png" /> 1,0<br />\
    <img src="styles/legend/ScakNoktalar2StdSapmazeri_8_2.png" /> 2,0<br />\
    <img src="styles/legend/ScakNoktalar2StdSapmazeri_8_3.png" /> 3,0<br />\
    <img src="styles/legend/ScakNoktalar2StdSapmazeri_8_4.png" /> 4,0<br />\
    <img src="styles/legend/ScakNoktalar2StdSapmazeri_8_5.png" /> 5,0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ScakNoktalar2StdSapmazeri_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3210672.273126, 5042844.029319, 3213016.876756, 5045797.394716]
        })
    });
var lyr_ScakNoktalar1StdSapmazeri_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sıcak Noktalar (1 Std. Sapma Üzeri)<br />\
    <img src="styles/legend/ScakNoktalar1StdSapmazeri_9_0.png" /> 0<br />\
    <img src="styles/legend/ScakNoktalar1StdSapmazeri_9_1.png" /> 1<br />\
    <img src="styles/legend/ScakNoktalar1StdSapmazeri_9_2.png" /> 2<br />\
    <img src="styles/legend/ScakNoktalar1StdSapmazeri_9_3.png" /> 3<br />\
    <img src="styles/legend/ScakNoktalar1StdSapmazeri_9_4.png" /> 4<br />\
    <img src="styles/legend/ScakNoktalar1StdSapmazeri_9_5.png" /> 5<br />\
    <img src="styles/legend/ScakNoktalar1StdSapmazeri_9_6.png" /> 6<br />\
    <img src="styles/legend/ScakNoktalar1StdSapmazeri_9_7.png" /> 7<br />\
    <img src="styles/legend/ScakNoktalar1StdSapmazeri_9_8.png" /> 8<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ScakNoktalar1StdSapmazeri_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3210672.273126, 5042844.029319, 3213016.876756, 5045797.394716]
        })
    });
var lyr_Termal12062025_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Termal - 12.06.2025<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Termal12062025_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3212243.855151, 5043263.433663, 3212359.850490, 5043346.130822]
        })
    });
var format_UuAlan25032025_11 = new ol.format.GeoJSON();
var features_UuAlan25032025_11 = format_UuAlan25032025_11.readFeatures(json_UuAlan25032025_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UuAlan25032025_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UuAlan25032025_11.addFeatures(features_UuAlan25032025_11);
var lyr_UuAlan25032025_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UuAlan25032025_11, 
                style: style_UuAlan25032025_11,
                popuplayertitle: 'Uçuş Alanı - 25.03.2025',
                interactive: true,
                title: '<img src="styles/legend/UuAlan25032025_11.png" /> Uçuş Alanı - 25.03.2025'
            });
var format_UuAlan18042025_12 = new ol.format.GeoJSON();
var features_UuAlan18042025_12 = format_UuAlan18042025_12.readFeatures(json_UuAlan18042025_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UuAlan18042025_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UuAlan18042025_12.addFeatures(features_UuAlan18042025_12);
var lyr_UuAlan18042025_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UuAlan18042025_12, 
                style: style_UuAlan18042025_12,
                popuplayertitle: 'Uçuş Alanı - 18.04.2025',
                interactive: true,
                title: '<img src="styles/legend/UuAlan18042025_12.png" /> Uçuş Alanı - 18.04.2025'
            });
var format_UuAlan28052025_13 = new ol.format.GeoJSON();
var features_UuAlan28052025_13 = format_UuAlan28052025_13.readFeatures(json_UuAlan28052025_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UuAlan28052025_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UuAlan28052025_13.addFeatures(features_UuAlan28052025_13);
var lyr_UuAlan28052025_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UuAlan28052025_13, 
                style: style_UuAlan28052025_13,
                popuplayertitle: 'Uçuş Alanı - 28.05.2025',
                interactive: true,
                title: '<img src="styles/legend/UuAlan28052025_13.png" /> Uçuş Alanı - 28.05.2025'
            });
var format_UuAlan23072025_14 = new ol.format.GeoJSON();
var features_UuAlan23072025_14 = format_UuAlan23072025_14.readFeatures(json_UuAlan23072025_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UuAlan23072025_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UuAlan23072025_14.addFeatures(features_UuAlan23072025_14);
var lyr_UuAlan23072025_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UuAlan23072025_14, 
                style: style_UuAlan23072025_14,
                popuplayertitle: 'Uçuş Alanı - 23.07.2025',
                interactive: true,
                title: '<img src="styles/legend/UuAlan23072025_14.png" /> Uçuş Alanı - 23.07.2025'
            });
var format_MetanKonsantrasyonlar25032025_15 = new ol.format.GeoJSON();
var features_MetanKonsantrasyonlar25032025_15 = format_MetanKonsantrasyonlar25032025_15.readFeatures(json_MetanKonsantrasyonlar25032025_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetanKonsantrasyonlar25032025_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetanKonsantrasyonlar25032025_15.addFeatures(features_MetanKonsantrasyonlar25032025_15);
var lyr_MetanKonsantrasyonlar25032025_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetanKonsantrasyonlar25032025_15, 
                style: style_MetanKonsantrasyonlar25032025_15,
                popuplayertitle: 'Metan Konsantrasyonları - 25.03.2025',
                interactive: true,
    title: 'Metan Konsantrasyonları - 25.03.2025<br />\
    <img src="styles/legend/MetanKonsantrasyonlar25032025_15_0.png" /> 543 - 750 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar25032025_15_1.png" /> 750 - 1.000 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar25032025_15_2.png" /> 1.000 - 1.250 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar25032025_15_3.png" /> 1.250 - 1.500 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar25032025_15_4.png" /> 1.500 - 1.696 (ppm-m)<br />' });
var format_MetanKonsantrasyonlar18042025_16 = new ol.format.GeoJSON();
var features_MetanKonsantrasyonlar18042025_16 = format_MetanKonsantrasyonlar18042025_16.readFeatures(json_MetanKonsantrasyonlar18042025_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetanKonsantrasyonlar18042025_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetanKonsantrasyonlar18042025_16.addFeatures(features_MetanKonsantrasyonlar18042025_16);
var lyr_MetanKonsantrasyonlar18042025_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetanKonsantrasyonlar18042025_16, 
                style: style_MetanKonsantrasyonlar18042025_16,
                popuplayertitle: 'Metan Konsantrasyonları - 18.04.2025',
                interactive: true,
    title: 'Metan Konsantrasyonları - 18.04.2025<br />\
    <img src="styles/legend/MetanKonsantrasyonlar18042025_16_0.png" /> 500 - 750 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar18042025_16_1.png" /> 750 - 1.000 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar18042025_16_2.png" /> 1.000 - 1.250 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar18042025_16_3.png" /> 1.250 - 1.500 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar18042025_16_4.png" /> 1.500 - 1.631 (ppm-m)<br />' });
var format_MetanKonsantrasyonlar28052025_17 = new ol.format.GeoJSON();
var features_MetanKonsantrasyonlar28052025_17 = format_MetanKonsantrasyonlar28052025_17.readFeatures(json_MetanKonsantrasyonlar28052025_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetanKonsantrasyonlar28052025_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetanKonsantrasyonlar28052025_17.addFeatures(features_MetanKonsantrasyonlar28052025_17);
var lyr_MetanKonsantrasyonlar28052025_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetanKonsantrasyonlar28052025_17, 
                style: style_MetanKonsantrasyonlar28052025_17,
                popuplayertitle: 'Metan Konsantrasyonları - 28.05.2025',
                interactive: true,
    title: 'Metan Konsantrasyonları - 28.05.2025<br />\
    <img src="styles/legend/MetanKonsantrasyonlar28052025_17_0.png" /> 442 - 750 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar28052025_17_1.png" /> 750 - 1.000 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar28052025_17_2.png" /> 1.000 - 1.250 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar28052025_17_3.png" /> 1.250 - 1.500 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar28052025_17_4.png" /> 1.500 - 8.952 (ppm-m)<br />' });
var format_MetanKonsantrasyonlar13062025_18 = new ol.format.GeoJSON();
var features_MetanKonsantrasyonlar13062025_18 = format_MetanKonsantrasyonlar13062025_18.readFeatures(json_MetanKonsantrasyonlar13062025_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetanKonsantrasyonlar13062025_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetanKonsantrasyonlar13062025_18.addFeatures(features_MetanKonsantrasyonlar13062025_18);
var lyr_MetanKonsantrasyonlar13062025_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetanKonsantrasyonlar13062025_18, 
                style: style_MetanKonsantrasyonlar13062025_18,
                popuplayertitle: 'Metan Konsantrasyonları - 13.06.2025',
                interactive: true,
    title: 'Metan Konsantrasyonları - 13.06.2025<br />\
    <img src="styles/legend/MetanKonsantrasyonlar13062025_18_0.png" /> 180 - 750 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar13062025_18_1.png" /> 750 - 1.000 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar13062025_18_2.png" /> 1.000 - 1.250 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar13062025_18_3.png" /> 1.250 - 1.500 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar13062025_18_4.png" /> 1.500 - 25.041 (ppm-m)<br />' });
var format_YerTeyitNoktalar13062025_19 = new ol.format.GeoJSON();
var features_YerTeyitNoktalar13062025_19 = format_YerTeyitNoktalar13062025_19.readFeatures(json_YerTeyitNoktalar13062025_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YerTeyitNoktalar13062025_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YerTeyitNoktalar13062025_19.addFeatures(features_YerTeyitNoktalar13062025_19);
var lyr_YerTeyitNoktalar13062025_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YerTeyitNoktalar13062025_19, 
                style: style_YerTeyitNoktalar13062025_19,
                popuplayertitle: 'Yer Teyit Noktaları - 13.06.2025',
                interactive: true,
    title: 'Yer Teyit Noktaları - 13.06.2025<br />\
    <img src="styles/legend/YerTeyitNoktalar13062025_19_0.png" /> 6.344 (ppm-m)<br />\
    <img src="styles/legend/YerTeyitNoktalar13062025_19_1.png" /> 6.558 (ppm-m)<br />\
    <img src="styles/legend/YerTeyitNoktalar13062025_19_2.png" /> 8.952 (ppm-m)<br />' });
var format_MetanKonsantrasyonlar23072025_20 = new ol.format.GeoJSON();
var features_MetanKonsantrasyonlar23072025_20 = format_MetanKonsantrasyonlar23072025_20.readFeatures(json_MetanKonsantrasyonlar23072025_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetanKonsantrasyonlar23072025_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetanKonsantrasyonlar23072025_20.addFeatures(features_MetanKonsantrasyonlar23072025_20);
var lyr_MetanKonsantrasyonlar23072025_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetanKonsantrasyonlar23072025_20, 
                style: style_MetanKonsantrasyonlar23072025_20,
                popuplayertitle: 'Metan Konsantrasyonları - 23.07.2025',
                interactive: true,
    title: 'Metan Konsantrasyonları - 23.07.2025<br />\
    <img src="styles/legend/MetanKonsantrasyonlar23072025_20_0.png" /> 517 - 750 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar23072025_20_1.png" /> 750 - 864 (ppm-m)<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_AraziYzeyScakl30m25032025_1.setVisible(false);lyr_AraziYzeyScakl30m18042025_2.setVisible(false);lyr_AraziYzeyScakl10m28052025_3.setVisible(false);lyr_AraziYzeyScakl30m28052025_4.setVisible(false);lyr_AraziYzeyScakl10m13062025_5.setVisible(false);lyr_AraziYzeyScakl30m13062025_6.setVisible(false);lyr_ScakNoktalar3StdSapmazeri_7.setVisible(false);lyr_ScakNoktalar2StdSapmazeri_8.setVisible(false);lyr_ScakNoktalar1StdSapmazeri_9.setVisible(false);lyr_Termal12062025_10.setVisible(false);lyr_UuAlan25032025_11.setVisible(true);lyr_UuAlan18042025_12.setVisible(true);lyr_UuAlan28052025_13.setVisible(true);lyr_UuAlan23072025_14.setVisible(true);lyr_MetanKonsantrasyonlar25032025_15.setVisible(true);lyr_MetanKonsantrasyonlar18042025_16.setVisible(true);lyr_MetanKonsantrasyonlar28052025_17.setVisible(true);lyr_MetanKonsantrasyonlar13062025_18.setVisible(true);lyr_YerTeyitNoktalar13062025_19.setVisible(true);lyr_MetanKonsantrasyonlar23072025_20.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_AraziYzeyScakl30m25032025_1,lyr_AraziYzeyScakl30m18042025_2,lyr_AraziYzeyScakl10m28052025_3,lyr_AraziYzeyScakl30m28052025_4,lyr_AraziYzeyScakl10m13062025_5,lyr_AraziYzeyScakl30m13062025_6,lyr_ScakNoktalar3StdSapmazeri_7,lyr_ScakNoktalar2StdSapmazeri_8,lyr_ScakNoktalar1StdSapmazeri_9,lyr_Termal12062025_10,lyr_UuAlan25032025_11,lyr_UuAlan18042025_12,lyr_UuAlan28052025_13,lyr_UuAlan23072025_14,lyr_MetanKonsantrasyonlar25032025_15,lyr_MetanKonsantrasyonlar18042025_16,lyr_MetanKonsantrasyonlar28052025_17,lyr_MetanKonsantrasyonlar13062025_18,lyr_YerTeyitNoktalar13062025_19,lyr_MetanKonsantrasyonlar23072025_20];
lyr_UuAlan25032025_11.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folderpath': 'folderpath', 'symbolid': 'symbolid', 'altmode': 'altmode', 'base': 'base', 'clamped': 'clamped', 'extruded': 'extruded', 'snippet': 'snippet', 'popupinfo': 'popupinfo', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_UuAlan18042025_12.set('fieldAliases', {'fid': 'fid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_UuAlan28052025_13.set('fieldAliases', {'fid': 'fid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_UuAlan23072025_14.set('fieldAliases', {'fid': 'fid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_MetanKonsantrasyonlar25032025_15.set('fieldAliases', {'fid': 'fid', 'tari̇h': 'TARİH', 'enlem': 'ENLEM', 'boylam': 'BOYLAM', 'metan_kons': 'METAN KONS. (ppm-m)', });
lyr_MetanKonsantrasyonlar18042025_16.set('fieldAliases', {'fid': 'fid', 'tari̇h': 'TARİH', 'enlem': 'ENLEM', 'boylam': 'BOYLAM', 'metan_kons': 'METAN KONS. (ppm-m)', });
lyr_MetanKonsantrasyonlar28052025_17.set('fieldAliases', {'fid': 'fid', 'tari̇h': 'TARİH', 'enlem': 'ENLEM', 'boylam': 'BOYLAM', 'metan_kons': 'METAN KONS. (ppm-m)', });
lyr_MetanKonsantrasyonlar13062025_18.set('fieldAliases', {'fid': 'fid', 'sira': 'SIRA', 'tari̇h': 'TARİH', 'enlem': 'ENLEM', 'boylam': 'BOYLAM', 'metan_kons': 'METAN KONS. (ppm-m)', });
lyr_YerTeyitNoktalar13062025_19.set('fieldAliases', {'fid': 'fid', 'tari̇h': 'TARİH', 'enlem': 'ENLEM', 'boylam': 'BOYLAM', 'METAN KONS. (ppm-m)': 'METAN KONS. (ppm-m)', });
lyr_MetanKonsantrasyonlar23072025_20.set('fieldAliases', {'fid': 'fid', 'SIRA': 'SIRA', 'TARİH': 'TARİH', 'ENLEM': 'ENLEM', 'BOYLAM': 'BOYLAM', 'METAN KONS. (ppm-m)': 'METAN KONS. (ppm-m)', });
lyr_UuAlan25032025_11.set('fieldImages', {'fid': '', 'name': '', 'folderpath': '', 'symbolid': '', 'altmode': '', 'base': '', 'clamped': '', 'extruded': '', 'snippet': '', 'popupinfo': '', 'shape_leng': '', 'shape_area': '', });
lyr_UuAlan18042025_12.set('fieldImages', {'fid': '', 'shape_leng': '', 'shape_area': '', });
lyr_UuAlan28052025_13.set('fieldImages', {'fid': '', 'shape_leng': '', 'shape_area': '', });
lyr_UuAlan23072025_14.set('fieldImages', {'fid': '', 'shape_leng': '', 'shape_area': '', });
lyr_MetanKonsantrasyonlar25032025_15.set('fieldImages', {'fid': 'TextEdit', 'tari̇h': 'DateTime', 'enlem': 'TextEdit', 'boylam': 'TextEdit', 'metan_kons': 'TextEdit', });
lyr_MetanKonsantrasyonlar18042025_16.set('fieldImages', {'fid': 'TextEdit', 'tari̇h': 'DateTime', 'enlem': 'TextEdit', 'boylam': 'TextEdit', 'metan_kons': 'TextEdit', });
lyr_MetanKonsantrasyonlar28052025_17.set('fieldImages', {'fid': 'TextEdit', 'tari̇h': 'DateTime', 'enlem': 'TextEdit', 'boylam': 'TextEdit', 'metan_kons': 'TextEdit', });
lyr_MetanKonsantrasyonlar13062025_18.set('fieldImages', {'fid': 'TextEdit', 'sira': 'TextEdit', 'tari̇h': 'DateTime', 'enlem': 'TextEdit', 'boylam': 'TextEdit', 'metan_kons': 'TextEdit', });
lyr_YerTeyitNoktalar13062025_19.set('fieldImages', {'fid': 'TextEdit', 'tari̇h': 'DateTime', 'enlem': 'TextEdit', 'boylam': 'TextEdit', 'METAN KONS. (ppm-m)': 'TextEdit', });
lyr_MetanKonsantrasyonlar23072025_20.set('fieldImages', {'fid': '', 'SIRA': '', 'TARİH': '', 'ENLEM': '', 'BOYLAM': '', 'METAN KONS. (ppm-m)': '', });
lyr_UuAlan25032025_11.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'folderpath': 'hidden field', 'symbolid': 'hidden field', 'altmode': 'hidden field', 'base': 'hidden field', 'clamped': 'hidden field', 'extruded': 'hidden field', 'snippet': 'hidden field', 'popupinfo': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', });
lyr_UuAlan18042025_12.set('fieldLabels', {'fid': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', });
lyr_UuAlan28052025_13.set('fieldLabels', {'fid': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', });
lyr_UuAlan23072025_14.set('fieldLabels', {'fid': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', });
lyr_MetanKonsantrasyonlar25032025_15.set('fieldLabels', {'fid': 'hidden field', 'tari̇h': 'header label - visible with data', 'enlem': 'header label - visible with data', 'boylam': 'header label - visible with data', 'metan_kons': 'header label - visible with data', });
lyr_MetanKonsantrasyonlar18042025_16.set('fieldLabels', {'fid': 'hidden field', 'tari̇h': 'header label - visible with data', 'enlem': 'header label - visible with data', 'boylam': 'header label - visible with data', 'metan_kons': 'header label - visible with data', });
lyr_MetanKonsantrasyonlar28052025_17.set('fieldLabels', {'fid': 'hidden field', 'tari̇h': 'header label - visible with data', 'enlem': 'header label - visible with data', 'boylam': 'header label - visible with data', 'metan_kons': 'header label - visible with data', });
lyr_MetanKonsantrasyonlar13062025_18.set('fieldLabels', {'fid': 'hidden field', 'sira': 'hidden field', 'tari̇h': 'header label - visible with data', 'enlem': 'header label - visible with data', 'boylam': 'header label - visible with data', 'metan_kons': 'header label - visible with data', });
lyr_YerTeyitNoktalar13062025_19.set('fieldLabels', {'fid': 'hidden field', 'tari̇h': 'header label - visible with data', 'enlem': 'header label - visible with data', 'boylam': 'header label - visible with data', 'METAN KONS. (ppm-m)': 'header label - visible with data', });
lyr_MetanKonsantrasyonlar23072025_20.set('fieldLabels', {'fid': 'hidden field', 'SIRA': 'hidden field', 'TARİH': 'header label - visible with data', 'ENLEM': 'header label - visible with data', 'BOYLAM': 'header label - visible with data', 'METAN KONS. (ppm-m)': 'header label - visible with data', });
lyr_MetanKonsantrasyonlar23072025_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});