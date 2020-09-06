<template>
    <div class="VideoGroup">
        <div class="TitleWrapper">
            <h3>视频</h3>
            <div class="options">
                <span>查看全部</span>
                <span class="iconfont">&#xe625;</span>
            </div>
        </div>
        <div class="VideoWrapper">
            <ul class="video-list">
                <li class="video-item" v-for="item of lists" :key="item.id">
                    <div class="item-wrapper" @click="showVideo = true ; PlayingNumber = item.id">
                        <div class="img-wrapper">
                            <img :src=item.img alt="">
                        </div>
                        <h3>{{item.title}}</h3>
                        <p>{{item.desc}}</p>
                    </div>
                    <div class="mask" v-show="showVideo && PlayingNumber == item.id">
                        <div class="video-container">
                            <div class="top-box">
                                <h3>{{item.title}}</h3>
                                <div class="icon-wrapper" @click="closeVideo($event)" :id=item.id>
                                    <span class="iconfont" :id=item.id>&#xe609;</span>
                                </div>
                            </div>
                            <div class="play-icon">
                                <span @click="rePlay" class="iconfont" v-show="!isPlaying" :id=item.id>&#xe631;</span>
                            </div>
                            <video  @playing="isPlaying=true" @pause="isPlaying=false" :src=item.VideoSrc controls="controls"></video>
                        </div>  
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'ViedeoGroup',
    props:{
        lists:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            showVideo : false,
            isPlaying : false,
            PlayingNumber:''
        }
    },
    methods:{
        controlVideo(){
            this.showVideo = !this.showVideo
            console.log(this.showVideo)
        },
        rePlay(){
            this.isPlaying = true
            let idx = event.target.id
            let via = document.getElementsByTagName('video')[idx]
            if(via.paused){
                via.play()
            }
        },
        closeVideo(e){
            this.showVideo = false
            let idx = e.target.id
            let via = document.getElementsByTagName('video')[idx]
            let currentSrc = via.currentSrc
            via.src = ''
            via.src = currentSrc
            via.pause()
        }
    }
}
</script>

<style lang="scss">
    .VideoGroup{
        
        .TitleWrapper{
            position: relative;
            padding-bottom: 14px;
            h3{
                font-size: 20px;
                font-weight: 200;
            }
            .options{
                position: absolute;
                height: 25px;
                line-height: 25px;
                top: 3px;
                right: 0px;
                cursor: pointer;
                transition: color .25s;
                &:hover{
                    color: #ff6700;
                    transition: color .25s;
                }
                span{
                    font-size: 16px;
                    vertical-align: middle;
                }
                .iconfont{
                    font-size: 20px;
                    margin-left: 10px;
                }
            }
        }
        .VideoWrapper{
            .video-item{
                display: inline-block;
                vertical-align: top;
                margin-left: 14px;
                margin-bottom: 14px;
                height: 285px;
                background-color: #fff;
                &:first-child{
                    margin-left: 0px;
                }
                .item-wrapper{
                    text-align: center;
                    cursor: pointer;
                    .img-wrapper{
                        margin-bottom: 28px;
                    }
                    img{
                        width: 296px;
                    }
                    h3{
                        color: #333;
                        font-size: 14px;
                        font-weight: 400;
                        margin: 0 14px 6px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    p{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #b0b0b0;
                    }
                }
                .mask{
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    left: 0px;
                    top: 0px;
                    background-color: #0000009c;
                    z-index: 100;
                    .video-container{
                        position: fixed;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%,-50%);
                        .top-box{
                            display: flex;
                            justify-content: space-between;
                            background-color: #fff;
                            padding: 14px 20px;
                            height: 32px;
                            line-height: 32px;
                            color: #333;
                            font-size: 16px;
                            h3{
                                font-weight: 400;
                            }
                            .icon-wrapper{
                                width: 30px;
                                line-height: 30px;
                                border-radius: 50%;
                                text-align: center;
                                cursor: pointer;
                                transition: all 0.5s;
                                .iconfont{
                                    font-size: 12px;
                                }
                                &:hover{
                                    background-color: rgb(212,72,62);
                                    color: #fff;
                                    transition: all 0.5s;
                                }
                            }
                        }
                        .play-icon{
                            cursor: pointer;
                            .iconfont{
                                z-index: 101;
                                position: absolute;
                                display: block;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%,-50%);
                                width: 70px;
                                height: 70px;
                                font-size: 68px;
                            }
                        }
                        video{
                            width: 880px;
                            object-fit: cover;
                            outline: none ;
                        }
                    }  
                }
            }
        }
    }
</style>