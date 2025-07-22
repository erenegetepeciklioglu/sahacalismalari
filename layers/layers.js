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
var format_UuAlan25032025_1 = new ol.format.GeoJSON();
var features_UuAlan25032025_1 = format_UuAlan25032025_1.readFeatures(json_UuAlan25032025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UuAlan25032025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UuAlan25032025_1.addFeatures(features_UuAlan25032025_1);
var lyr_UuAlan25032025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UuAlan25032025_1, 
                style: style_UuAlan25032025_1,
                popuplayertitle: 'Uçuş Alanı - 25.03.2025',
                interactive: true,
                title: '<img src="styles/legend/UuAlan25032025_1.png" /> Uçuş Alanı - 25.03.2025'
            });
var format_UuAlan18042025_2 = new ol.format.GeoJSON();
var features_UuAlan18042025_2 = format_UuAlan18042025_2.readFeatures(json_UuAlan18042025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UuAlan18042025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UuAlan18042025_2.addFeatures(features_UuAlan18042025_2);
var lyr_UuAlan18042025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UuAlan18042025_2, 
                style: style_UuAlan18042025_2,
                popuplayertitle: 'Uçuş Alanı - 18.04.2025',
                interactive: true,
                title: '<img src="styles/legend/UuAlan18042025_2.png" /> Uçuş Alanı - 18.04.2025'
            });
var format_UuAlan28052025_3 = new ol.format.GeoJSON();
var features_UuAlan28052025_3 = format_UuAlan28052025_3.readFeatures(json_UuAlan28052025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UuAlan28052025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UuAlan28052025_3.addFeatures(features_UuAlan28052025_3);
var lyr_UuAlan28052025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UuAlan28052025_3, 
                style: style_UuAlan28052025_3,
                popuplayertitle: 'Uçuş Alanı - 28.05.2025',
                interactive: true,
                title: '<img src="styles/legend/UuAlan28052025_3.png" /> Uçuş Alanı - 28.05.2025'
            });
var format_MetanKonsantrasyonlar25032025_4 = new ol.format.GeoJSON();
var features_MetanKonsantrasyonlar25032025_4 = format_MetanKonsantrasyonlar25032025_4.readFeatures(json_MetanKonsantrasyonlar25032025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetanKonsantrasyonlar25032025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetanKonsantrasyonlar25032025_4.addFeatures(features_MetanKonsantrasyonlar25032025_4);
var lyr_MetanKonsantrasyonlar25032025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetanKonsantrasyonlar25032025_4, 
                style: style_MetanKonsantrasyonlar25032025_4,
                popuplayertitle: 'Metan Konsantrasyonları - 25.03.2025',
                interactive: true,
    title: 'Metan Konsantrasyonları - 25.03.2025<br />\
    <img src="styles/legend/MetanKonsantrasyonlar25032025_4_0.png" /> 543 - 750 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar25032025_4_1.png" /> 750 - 1.000 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar25032025_4_2.png" /> 1.000 - 1.250 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar25032025_4_3.png" /> 1.250 - 1.500 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar25032025_4_4.png" /> 1.500 - 1.696 (ppm-m)<br />' });
var format_MetanKonsantrasyonlar18042025_5 = new ol.format.GeoJSON();
var features_MetanKonsantrasyonlar18042025_5 = format_MetanKonsantrasyonlar18042025_5.readFeatures(json_MetanKonsantrasyonlar18042025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetanKonsantrasyonlar18042025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetanKonsantrasyonlar18042025_5.addFeatures(features_MetanKonsantrasyonlar18042025_5);
var lyr_MetanKonsantrasyonlar18042025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetanKonsantrasyonlar18042025_5, 
                style: style_MetanKonsantrasyonlar18042025_5,
                popuplayertitle: 'Metan Konsantrasyonları - 18.04.2025',
                interactive: true,
    title: 'Metan Konsantrasyonları - 18.04.2025<br />\
    <img src="styles/legend/MetanKonsantrasyonlar18042025_5_0.png" /> 500 - 750 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar18042025_5_1.png" /> 750 - 1.000 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar18042025_5_2.png" /> 1.000 - 1.250 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar18042025_5_3.png" /> 1.250 - 1.500 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar18042025_5_4.png" /> 1.500 - 1.631 (ppm-m)<br />' });
var format_MetanKonsantrasyonlar28052025_6 = new ol.format.GeoJSON();
var features_MetanKonsantrasyonlar28052025_6 = format_MetanKonsantrasyonlar28052025_6.readFeatures(json_MetanKonsantrasyonlar28052025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetanKonsantrasyonlar28052025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetanKonsantrasyonlar28052025_6.addFeatures(features_MetanKonsantrasyonlar28052025_6);
var lyr_MetanKonsantrasyonlar28052025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetanKonsantrasyonlar28052025_6, 
                style: style_MetanKonsantrasyonlar28052025_6,
                popuplayertitle: 'Metan Konsantrasyonları - 28.05.2025',
                interactive: true,
    title: 'Metan Konsantrasyonları - 28.05.2025<br />\
    <img src="styles/legend/MetanKonsantrasyonlar28052025_6_0.png" /> 442 - 750 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar28052025_6_1.png" /> 750 - 1.000 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar28052025_6_2.png" /> 1.000 - 1.250 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar28052025_6_3.png" /> 1.250 - 1.500 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar28052025_6_4.png" /> 1.500 - 8.952 (ppm-m)<br />' });
var format_MetanKonsantrasyonlar13062025_7 = new ol.format.GeoJSON();
var features_MetanKonsantrasyonlar13062025_7 = format_MetanKonsantrasyonlar13062025_7.readFeatures(json_MetanKonsantrasyonlar13062025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetanKonsantrasyonlar13062025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetanKonsantrasyonlar13062025_7.addFeatures(features_MetanKonsantrasyonlar13062025_7);
var lyr_MetanKonsantrasyonlar13062025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetanKonsantrasyonlar13062025_7, 
                style: style_MetanKonsantrasyonlar13062025_7,
                popuplayertitle: 'Metan Konsantrasyonları - 13.06.2025',
                interactive: true,
    title: 'Metan Konsantrasyonları - 13.06.2025<br />\
    <img src="styles/legend/MetanKonsantrasyonlar13062025_7_0.png" /> 180 - 750 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar13062025_7_1.png" /> 750 - 1.000 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar13062025_7_2.png" /> 1.000 - 1.250 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar13062025_7_3.png" /> 1.250 - 1.500 (ppm-m)<br />\
    <img src="styles/legend/MetanKonsantrasyonlar13062025_7_4.png" /> 1.500 - 25.041 (ppm-m)<br />' });
var format_YerTeyitNoktalar13062025_8 = new ol.format.GeoJSON();
var features_YerTeyitNoktalar13062025_8 = format_YerTeyitNoktalar13062025_8.readFeatures(json_YerTeyitNoktalar13062025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YerTeyitNoktalar13062025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YerTeyitNoktalar13062025_8.addFeatures(features_YerTeyitNoktalar13062025_8);
var lyr_YerTeyitNoktalar13062025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YerTeyitNoktalar13062025_8, 
                style: style_YerTeyitNoktalar13062025_8,
                popuplayertitle: 'Yer Teyit Noktaları - 13.06.2025',
                interactive: true,
    title: 'Yer Teyit Noktaları - 13.06.2025<br />\
    <img src="styles/legend/YerTeyitNoktalar13062025_8_0.png" /> 6.344 (ppm-m)<br />\
    <img src="styles/legend/YerTeyitNoktalar13062025_8_1.png" /> 6.558 (ppm-m)<br />\
    <img src="styles/legend/YerTeyitNoktalar13062025_8_2.png" /> 8.952 (ppm-m)<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_UuAlan25032025_1.setVisible(true);lyr_UuAlan18042025_2.setVisible(true);lyr_UuAlan28052025_3.setVisible(true);lyr_MetanKonsantrasyonlar25032025_4.setVisible(true);lyr_MetanKonsantrasyonlar18042025_5.setVisible(true);lyr_MetanKonsantrasyonlar28052025_6.setVisible(true);lyr_MetanKonsantrasyonlar13062025_7.setVisible(true);lyr_YerTeyitNoktalar13062025_8.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_UuAlan25032025_1,lyr_UuAlan18042025_2,lyr_UuAlan28052025_3,lyr_MetanKonsantrasyonlar25032025_4,lyr_MetanKonsantrasyonlar18042025_5,lyr_MetanKonsantrasyonlar28052025_6,lyr_MetanKonsantrasyonlar13062025_7,lyr_YerTeyitNoktalar13062025_8];
lyr_UuAlan25032025_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_UuAlan18042025_2.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_UuAlan28052025_3.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MetanKonsantrasyonlar25032025_4.set('fieldAliases', {'fid': 'fid', 'TARİH': 'TARİH', 'ENLEM': 'ENLEM', 'BOYLAM': 'BOYLAM', 'YÜKSEKLİ': 'YÜKSEKLİ', 'HIZ__m_s_': 'HIZ__m_s_', 'METAN_KONS': 'METAN_KONS', 'METAN KONS. (ppm-m)': 'METAN KONS. (ppm-m)', });
lyr_MetanKonsantrasyonlar18042025_5.set('fieldAliases', {'fid': 'fid', 'TARİH': 'TARİH', 'ENLEM': 'ENLEM', 'BOYLAM': 'BOYLAM', 'YÜKSEKLİ': 'YÜKSEKLİ', 'HIZ__m_s_': 'HIZ__m_s_', 'METAN_KONS': 'METAN_KONS', 'METAN KONS. (ppm-m)': 'METAN KONS. (ppm-m)', });
lyr_MetanKonsantrasyonlar28052025_6.set('fieldAliases', {'fid': 'fid', 'TARİH': 'TARİH', 'ENLEM': 'ENLEM', 'BOYLAM': 'BOYLAM', 'YÜKSEKLİ': 'YÜKSEKLİ', 'HIZ__m_s_': 'HIZ__m_s_', 'METAN_KONS': 'METAN_KONS', 'METAN KONS. (ppm-m)': 'METAN KONS. (ppm-m)', });
lyr_MetanKonsantrasyonlar13062025_7.set('fieldAliases', {'fid': 'fid', 'SIRA': 'SIRA', 'TARİH': 'TARİH', 'ENLEM': 'ENLEM', 'BOYLAM': 'BOYLAM', 'YÜKSEKLİ': 'YÜKSEKLİ', 'HIZ__m_s_': 'HIZ__m_s_', 'METAN_KONS': 'METAN_KONS', 'METAN KONS. (ppm-m)': 'METAN KONS. (ppm-m)', });
lyr_YerTeyitNoktalar13062025_8.set('fieldAliases', {'fid': 'fid', 'TARİH': 'TARİH', 'ENLEM': 'ENLEM', 'BOYLAM': 'BOYLAM', 'YÜKSEKLİ': 'YÜKSEKLİ', 'HIZ__m_s_': 'HIZ__m_s_', 'METAN_KONS': 'METAN_KONS', 'METAN KONS. (ppm-m)': 'METAN KONS. (ppm-m)', });
lyr_UuAlan25032025_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_UuAlan18042025_2.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_UuAlan28052025_3.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MetanKonsantrasyonlar25032025_4.set('fieldImages', {'fid': 'TextEdit', 'TARİH': 'DateTime', 'ENLEM': 'TextEdit', 'BOYLAM': 'TextEdit', 'YÜKSEKLİ': 'TextEdit', 'HIZ__m_s_': 'TextEdit', 'METAN_KONS': 'TextEdit', 'METAN KONS. (ppm-m)': 'TextEdit', });
lyr_MetanKonsantrasyonlar18042025_5.set('fieldImages', {'fid': 'TextEdit', 'TARİH': 'DateTime', 'ENLEM': 'TextEdit', 'BOYLAM': 'TextEdit', 'YÜKSEKLİ': 'TextEdit', 'HIZ__m_s_': 'TextEdit', 'METAN_KONS': 'TextEdit', 'METAN KONS. (ppm-m)': 'TextEdit', });
lyr_MetanKonsantrasyonlar28052025_6.set('fieldImages', {'fid': 'TextEdit', 'TARİH': 'DateTime', 'ENLEM': 'TextEdit', 'BOYLAM': 'TextEdit', 'YÜKSEKLİ': 'TextEdit', 'HIZ__m_s_': 'TextEdit', 'METAN_KONS': 'TextEdit', 'METAN KONS. (ppm-m)': 'TextEdit', });
lyr_MetanKonsantrasyonlar13062025_7.set('fieldImages', {'fid': 'TextEdit', 'SIRA': 'TextEdit', 'TARİH': 'DateTime', 'ENLEM': 'TextEdit', 'BOYLAM': 'TextEdit', 'YÜKSEKLİ': 'TextEdit', 'HIZ__m_s_': 'TextEdit', 'METAN_KONS': 'TextEdit', 'METAN KONS. (ppm-m)': 'TextEdit', });
lyr_YerTeyitNoktalar13062025_8.set('fieldImages', {'fid': 'TextEdit', 'TARİH': 'DateTime', 'ENLEM': 'TextEdit', 'BOYLAM': 'TextEdit', 'YÜKSEKLİ': 'TextEdit', 'HIZ__m_s_': 'TextEdit', 'METAN_KONS': 'TextEdit', 'METAN KONS. (ppm-m)': 'TextEdit', });
lyr_UuAlan25032025_1.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'AltMode': 'hidden field', 'Base': 'hidden field', 'Clamped': 'hidden field', 'Extruded': 'hidden field', 'Snippet': 'hidden field', 'PopupInfo': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_UuAlan18042025_2.set('fieldLabels', {'fid': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_UuAlan28052025_3.set('fieldLabels', {'fid': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MetanKonsantrasyonlar25032025_4.set('fieldLabels', {'fid': 'hidden field', 'TARİH': 'header label - visible with data', 'ENLEM': 'header label - visible with data', 'BOYLAM': 'header label - visible with data', 'YÜKSEKLİ': 'hidden field', 'HIZ__m_s_': 'hidden field', 'METAN_KONS': 'hidden field', 'METAN KONS. (ppm-m)': 'header label - visible with data', });
lyr_MetanKonsantrasyonlar18042025_5.set('fieldLabels', {'fid': 'hidden field', 'TARİH': 'header label - visible with data', 'ENLEM': 'header label - visible with data', 'BOYLAM': 'header label - visible with data', 'YÜKSEKLİ': 'hidden field', 'HIZ__m_s_': 'hidden field', 'METAN_KONS': 'hidden field', 'METAN KONS. (ppm-m)': 'header label - visible with data', });
lyr_MetanKonsantrasyonlar28052025_6.set('fieldLabels', {'fid': 'hidden field', 'TARİH': 'header label - visible with data', 'ENLEM': 'header label - visible with data', 'BOYLAM': 'header label - visible with data', 'YÜKSEKLİ': 'hidden field', 'HIZ__m_s_': 'hidden field', 'METAN_KONS': 'hidden field', 'METAN KONS. (ppm-m)': 'header label - visible with data', });
lyr_MetanKonsantrasyonlar13062025_7.set('fieldLabels', {'fid': 'hidden field', 'SIRA': 'hidden field', 'TARİH': 'header label - visible with data', 'ENLEM': 'header label - visible with data', 'BOYLAM': 'header label - visible with data', 'YÜKSEKLİ': 'hidden field', 'HIZ__m_s_': 'hidden field', 'METAN_KONS': 'hidden field', 'METAN KONS. (ppm-m)': 'header label - visible with data', });
lyr_YerTeyitNoktalar13062025_8.set('fieldLabels', {'fid': 'hidden field', 'TARİH': 'header label - visible with data', 'ENLEM': 'header label - visible with data', 'BOYLAM': 'header label - visible with data', 'YÜKSEKLİ': 'hidden field', 'HIZ__m_s_': 'hidden field', 'METAN_KONS': 'hidden field', 'METAN KONS. (ppm-m)': 'header label - visible with data', });
lyr_YerTeyitNoktalar13062025_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});