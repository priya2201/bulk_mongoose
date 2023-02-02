let json2csv=require('json2csv').parse;

exports.get=function(req,res){
    var fields=[
        'name.firstName',
        'name.lastName',
        'biography',
        'twitter',
        'facebook',
        'linkedin'
    ];
    let csv=json2csv({
        data:'',
        fields:fields
    });
    res.set("Content-Diposition","attachment;filename=authors.csv");
    res.set("Content-Type", "application/octet-stream");
 res.send(csv);
}