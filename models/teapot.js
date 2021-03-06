// Converted from: teapot.obj
//  vertices: 529
//  faces: 512
//  materials: 1
//
//  Generated with OBJ -> Three.js converter
//  http://github.com/alteredq/three.js/blob/master/utils/exporters/convert_obj_three.py


var model = {

    "version" : 1,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "glossy_normal",
	"colorAmbient" : [0.9882, 0.7922, 0.2],
	"colorDiffuse" : [0.9882, 0.7922, 0.2],
	"colorSpecular" : [0.702, 0.702, 0.702],
	"illumination" : 2,
	"mapNormal" : "07turtle.png",
	"mapNormalFactor" : 0.6,
	"mapNormalRepeat" : [1, 1],
	"mapNormalWrap" : ["repeat", "repeat"],
	"mapEnv" : "nx.png",
	"opticalDensity" : 1.5,
	"specularCoef" : 31.0,
	"transparency" : 0.0
	}],

    "buffers": "teapot.bin"

};

postMessage( model );
close();
