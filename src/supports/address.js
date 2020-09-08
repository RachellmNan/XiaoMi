export default (id1,id2,id3)=>{
    var pro  = ["湖南省","广东省","浙江省"]
    var city = [["长沙市","岳阳市","湘潭市"],["广州市","深圳市","佛山市"],["杭州市","宁波市","温州市"]]
    var area = [
        [["开福区","芙蓉区","天心区"],["岳阳楼区","君山区","云溪区"],["雨湖区","岳塘区","韶山市"]],
        [["白云区","天河区","黄浦区"],["宝安区","南山区","福田区"],["三水区","南海区","高明区"]],
        [["西湖区","滨江区","富阳区"],["奉化区","江北区","北仑区"],["洞头区","龙湾区","鹿城区"]]
    ]
    let select1,select2,select3
    select1 = document.getElementById(id1)
    select2 = document.getElementById(id2)
    select3 = document.getElementById(id3)
    for(let i =0 ; i < pro.length ; i++ ){
        for(let j = 0 ; j < city.length ; j++ ){
            for( let k = 0 ; k < area.length ; k++){
                
            }
        }
    }
}