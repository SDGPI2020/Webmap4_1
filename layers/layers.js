var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_GraduateDegreeAttainmentRate_1 = new ol.format.GeoJSON();
var features_GraduateDegreeAttainmentRate_1 = format_GraduateDegreeAttainmentRate_1.readFeatures(json_GraduateDegreeAttainmentRate_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GraduateDegreeAttainmentRate_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GraduateDegreeAttainmentRate_1.addFeatures(features_GraduateDegreeAttainmentRate_1);
var lyr_GraduateDegreeAttainmentRate_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GraduateDegreeAttainmentRate_1, 
                style: style_GraduateDegreeAttainmentRate_1,
                interactive: true,
    title: 'Graduate Degree Attainment Rate <br />\
    <img src="styles/legend/GraduateDegreeAttainmentRate_1_0.png" /> 0 - 5%<br />\
    <img src="styles/legend/GraduateDegreeAttainmentRate_1_1.png" /> 5 - 10%<br />\
    <img src="styles/legend/GraduateDegreeAttainmentRate_1_2.png" /> 10 - 15%<br />\
    <img src="styles/legend/GraduateDegreeAttainmentRate_1_3.png" /> 15 - 20%<br />\
    <img src="styles/legend/GraduateDegreeAttainmentRate_1_4.png" /> 20%+<br />'
        });
var format_HighSchoolDiplomaorHigher_2 = new ol.format.GeoJSON();
var features_HighSchoolDiplomaorHigher_2 = format_HighSchoolDiplomaorHigher_2.readFeatures(json_HighSchoolDiplomaorHigher_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HighSchoolDiplomaorHigher_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighSchoolDiplomaorHigher_2.addFeatures(features_HighSchoolDiplomaorHigher_2);
var lyr_HighSchoolDiplomaorHigher_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HighSchoolDiplomaorHigher_2, 
                style: style_HighSchoolDiplomaorHigher_2,
                interactive: true,
    title: 'High School Diploma or Higher<br />\
    <img src="styles/legend/HighSchoolDiplomaorHigher_2_0.png" /> 0 - 80%<br />\
    <img src="styles/legend/HighSchoolDiplomaorHigher_2_1.png" /> 80 - 85%<br />\
    <img src="styles/legend/HighSchoolDiplomaorHigher_2_2.png" /> 85 - 90%<br />\
    <img src="styles/legend/HighSchoolDiplomaorHigher_2_3.png" /> 90 - 95%<br />\
    <img src="styles/legend/HighSchoolDiplomaorHigher_2_4.png" /> 95%+<br />'
        });
var format_BAorHigher_3 = new ol.format.GeoJSON();
var features_BAorHigher_3 = format_BAorHigher_3.readFeatures(json_BAorHigher_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAorHigher_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAorHigher_3.addFeatures(features_BAorHigher_3);
var lyr_BAorHigher_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BAorHigher_3, 
                style: style_BAorHigher_3,
                interactive: true,
    title: 'BA or Higher<br />\
    <img src="styles/legend/BAorHigher_3_0.png" /> 0 - 15%<br />\
    <img src="styles/legend/BAorHigher_3_1.png" /> 15 - 30%<br />\
    <img src="styles/legend/BAorHigher_3_2.png" /> 30 - 45%<br />\
    <img src="styles/legend/BAorHigher_3_3.png" /> 45 - 60%<br />\
    <img src="styles/legend/BAorHigher_3_4.png" /> 60%+<br />'
        });
var format_BachelorsDegreeAttainmentRate_4 = new ol.format.GeoJSON();
var features_BachelorsDegreeAttainmentRate_4 = format_BachelorsDegreeAttainmentRate_4.readFeatures(json_BachelorsDegreeAttainmentRate_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BachelorsDegreeAttainmentRate_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BachelorsDegreeAttainmentRate_4.addFeatures(features_BachelorsDegreeAttainmentRate_4);
var lyr_BachelorsDegreeAttainmentRate_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BachelorsDegreeAttainmentRate_4, 
                style: style_BachelorsDegreeAttainmentRate_4,
                interactive: true,
    title: 'Bachelors Degree Attainment Rate<br />\
    <img src="styles/legend/BachelorsDegreeAttainmentRate_4_0.png" /> 0 - 10%<br />\
    <img src="styles/legend/BachelorsDegreeAttainmentRate_4_1.png" /> 10 - 20%<br />\
    <img src="styles/legend/BachelorsDegreeAttainmentRate_4_2.png" /> 20 - 30%<br />\
    <img src="styles/legend/BachelorsDegreeAttainmentRate_4_3.png" /> 30 - 35%<br />\
    <img src="styles/legend/BachelorsDegreeAttainmentRate_4_4.png" /> 35%+<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_GraduateDegreeAttainmentRate_1.setVisible(true);lyr_HighSchoolDiplomaorHigher_2.setVisible(true);lyr_BAorHigher_3.setVisible(true);lyr_BachelorsDegreeAttainmentRate_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GraduateDegreeAttainmentRate_1,lyr_HighSchoolDiplomaorHigher_2,lyr_BAorHigher_3,lyr_BachelorsDegreeAttainmentRate_4];
lyr_GraduateDegreeAttainmentRate_1.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Bachelors': 'Bachelors', 'Graduate': 'Graduate', 'HS or High': 'HS or High', 'Bachelor\'s': 'Bachelor\'s', 'Bachelors1': 'Bachelors1', 'Graduate1': 'Graduate1', 'HS >=': 'HS >=', 'BA >=': 'BA >=', });
lyr_HighSchoolDiplomaorHigher_2.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Bachelors': 'Bachelors', 'Graduate': 'Graduate', 'HS or High': 'HS or High', 'Bachelor\'s': 'Bachelor\'s', 'Bachelors1': 'Bachelors1', 'Graduate1': 'Graduate1', 'HS >=': 'HS >=', 'BA >=': 'BA >=', });
lyr_BAorHigher_3.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Bachelors': 'Bachelors', 'Graduate': 'Graduate', 'HS or High': 'HS or High', 'Bachelor\'s': 'Bachelor\'s', 'Bachelors1': 'Bachelors1', 'Graduate1': 'Graduate1', 'HS >=': 'HS >=', 'BA >=': 'BA >=', });
lyr_BachelorsDegreeAttainmentRate_4.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Bachelors': 'Bachelors', 'Graduate': 'Graduate', 'HS or High': 'HS or High', 'Bachelor\'s': 'Bachelor\'s', 'Bachelors1': 'Bachelors1', 'Graduate1': 'Graduate1', 'HS >=': 'HS >=', 'BA >=': 'BA >=', });
lyr_GraduateDegreeAttainmentRate_1.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Bachelors': 'Hidden', 'Graduate': 'Hidden', 'HS or High': 'Hidden', 'Bachelor\'s': 'Hidden', 'Bachelors1': 'Hidden', 'Graduate1': 'TextEdit', 'HS >=': 'Hidden', 'BA >=': 'Hidden', });
lyr_HighSchoolDiplomaorHigher_2.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Bachelors': 'Hidden', 'Graduate': 'Hidden', 'HS or High': 'Hidden', 'Bachelor\'s': 'Hidden', 'Bachelors1': 'Hidden', 'Graduate1': 'Hidden', 'HS >=': 'TextEdit', 'BA >=': 'Hidden', });
lyr_BAorHigher_3.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Bachelors': 'Hidden', 'Graduate': 'Hidden', 'HS or High': 'Hidden', 'Bachelor\'s': 'Hidden', 'Bachelors1': 'Hidden', 'Graduate1': 'Hidden', 'HS >=': 'Hidden', 'BA >=': 'TextEdit', });
lyr_BachelorsDegreeAttainmentRate_4.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Bachelors': 'Hidden', 'Graduate': 'Hidden', 'HS or High': 'Hidden', 'Bachelor\'s': 'Hidden', 'Bachelors1': 'TextEdit', 'Graduate1': 'Hidden', 'HS >=': 'Hidden', 'BA >=': 'Hidden', });
lyr_GraduateDegreeAttainmentRate_1.set('fieldLabels', {'Graduate1': 'inline label', });
lyr_HighSchoolDiplomaorHigher_2.set('fieldLabels', {'HS >=': 'inline label', });
lyr_BAorHigher_3.set('fieldLabels', {'BA >=': 'inline label', });
lyr_BachelorsDegreeAttainmentRate_4.set('fieldLabels', {'Bachelors1': 'inline label', });
lyr_BachelorsDegreeAttainmentRate_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});