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
                <li class="video-item" >
                    <!-- <a href="javascript:;"> -->
                        <div class="item-wrapper" @click="showVideo = true ; isPlaying = 1">
                            <div class="img-wrapper">
                                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg" alt="">
                            </div>
                            <h3>Redmi 10X系列发布会</h3>
                            <p>Redmi 10X系列发布会</p>
                        </div>
                        <div class="mask" v-if="showVideo && isPlaying == 1">
                            <div class="video-container">
                                <div class="top-box">
                                    <h3>Redmi 10系列发布会</h3>
                                    <div class="icon-wrapper" @click="showVideo = false">
                                        <span class="iconfont" >&#xe609;</span>
                                    </div>
                                </div>
                                <video src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4" autoplay  controls></video>
                            </div>  
                        </div>
                    <!-- </a> -->
                </li>
                <li class="video-item" >
                    <!-- <a href="javascript:;"> -->
                        <div class="item-wrapper" @click="showVideo = true ;isPlaying = 2">
                            <div class="img-wrapper">
                                <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=592&h=360&f=webp&q=90" alt="">
                            </div>
                            <h3>Redmi 10X系列发布会</h3>
                            <p>Redmi 10X系列发布会</p>
                        </div>
                        <div class="mask" v-if="showVideo && isPlaying == 2">
                            <div class="video-container">
                                <div class="top-box">
                                    <h3>Redmi 10系列发布会</h3>
                                    <div class="icon-wrapper" @click="showVideo = false">
                                        <span class="iconfont" >&#xe609;</span>
                                    </div>
                                </div>
                                <video src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4" autoplay  controls></video>
                            </div>  
                        </div>
                    <!-- </a> -->
                </li>
                <li class="video-item" >
                    <!-- <a href="javascript:;"> -->
                        <div class="item-wrapper" @click="showVideo = true ; isPlaying = 3">
                            <div class="img-wrapper">
                                <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=592&h=360&f=webp&q=90" alt="">
                            </div>
                            <h3>Redmi 10X系列发布会</h3>
                            <p>Redmi 10X系列发布会</p>
                        </div>
                        <div class="mask" v-if="showVideo && isPlaying == 3">
                            <div class="video-container">
                                <div class="top-box">
                                    <h3>Redmi 10系列发布会</h3>
                                    <div class="icon-wrapper" @click="showVideo = false">
                                        <span class="iconfont" >&#xe609;</span>
                                    </div>
                                </div>
                                <video src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4" autoplay  controls></video>
                            </div>  
                        </div>
                    <!-- </a> -->
                </li>
                <li class="video-item" >
                    <!-- <a href="javascript:;"> -->
                        <div class="item-wrapper" @click="showVideo = true ; isPlaying = 4">
                            <div class="img-wrapper">
                                <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8dd25cab48c60fc6387b9001eddc3f9.jpg?thumb=1&w=592&h=360&f=webp&q=90" alt="">
                            </div>
                            <h3>Redmi 10X系列发布会</h3>
                            <p>Redmi 10X系列发布会</p>
                        </div>
                        <div class="mask" v-if="showVideo && isPlaying == 4">
                            <div class="video-container">
                                <div class="top-box">
                                    <h3>Redmi 10系列发布会</h3>
                                    <div class="icon-wrapper" @click="showVideo = false">
                                        <span class="iconfont" >&#xe609;</span>
                                    </div>
                                </div>
                                <video src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eadb8ddc86f1791154442a928b042e2f.mp4" autoplay  controls></video>
                            </div>  
                        </div>
                    <!-- </a> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'ViedeoGroup',
    data(){
        return {
            showVideo : false,
            isPlaying : ''
        }
    },
    methods:{
        controlVideo(){
            this.showVideo = !this.showVideo
            console.log(this.showVideo)
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
                        video{
                            width: 880px;
                        }
                    }  
                }
            }
        }
    }
</style>