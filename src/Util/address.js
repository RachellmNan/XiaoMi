// var pro  = ["湖南省","广东省","浙江省"]
// var city = [["长沙市","岳阳市","湘潭市"],["广州市","深圳市","佛山市"],["杭州市","宁波市","温州市"]]
// var area = [
//     [["开福区","芙蓉区","天心区"],["岳阳楼区","君山区","云溪区"],["雨湖区","岳塘区","韶山市"]],
//     [["白云区","天河区","黄浦区"],["宝安区","南山区","福田区"],["三水区","南海区","高明区"]],
//     [["西湖区","滨江区","富阳区"],["奉化区","江北区","北仑区"],["洞头区","龙湾区","鹿城区"]]
// ]

// export var selectPro = ["湖南省","广东省","浙江省"]
// export var selectCity = []
// export var selectArea = []


export function changeProvince(item) {
    if(item == "湖南省"){
        this.selectCity = ["长沙市","岳阳市","湘潭市"]
    }else if(item == "广东省"){
        this.selectCity = ["广州市","深圳市","佛山市"]
    }else if(item == "浙江省"){
        this.selectCity = ["杭州市","宁波市","温州市"]
    }
    this.selectArea = []
}

export function changeCity(item) {
    if(item == "长沙市"){
        this.selectArea = ["开福区","芙蓉区","天心区"]
    }else if(item == "岳阳市"){
        this.selectArea = ["岳阳楼区","君山区","云溪区"]
    }else if(item == "湘潭市"){
        this.selectArea = ["雨湖区","岳塘区","韶山市"]
    }else if(item == "广州市"){
        this.selectArea = ["白云区","天河区","黄浦区"]
    }else if(item == "深圳市"){
        this.selectArea = ["宝安区","南山区","福田区"]
    }else if(item == "佛山市"){
        this.selectArea = ["三水区","南海区","高明区"]
    }else if(item == "杭州市"){
        this.selectArea = ["西湖区","滨江区","富阳区"]
    }else if(item == "宁波市"){
        this.selectArea = ["奉化区","江北区","北仑区"]
    }else if(item == "温州市"){
        this.selectArea = ["洞头区","龙湾区","鹿城区"]
    }
}

