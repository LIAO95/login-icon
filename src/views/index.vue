<template>
  <div class="index-content">
       <div class="index-header">
          <div>
               <img src="../assets/logo.png" alt="">
                <p>AI靶场后台管理</p>
          </div>
          <div class="top-right">
              <i class="el-icon-sunset"></i>
              <p class="el-icon-user-solid">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Admin</p>

              <el-switch
                    class="switch"
                    v-model="value"
                    active-color="#547ff0"
                    inactive-color="#009491"
                    :active-value="0"
                    :inactive-value="1"
                    active-text="EN"
                    inactive-text="中文"
                >
                </el-switch>

          </div>
      </div>
      <div class="index-con">
        <ul class="icon-top">
            <li v-for="(item, index) in list" :key="index">
                <img :src="item.url" alt="">
                <p>{{ item.titile }}</p>
            </li>
        </ul>

        <ul class="icon-body">
            <li v-for="(item, index) in listIcon" :key="index">
                <!-- <div class="listIcon">
                 
                </div> -->
                 <img :src="item.url" alt="">
                  <p>{{ item.titile }}</p>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value: true,
            list: [
                {
                    titile: 'Ambari',
                    url: require('../assets/icon/1.png')
                },
                {
                    titile: 'Jenkins',
                    url: require('../assets/icon/2.png')
                },
                {
                    titile: 'Consoul',
                    url: require('../assets/icon/3.png')
                },
                {
                    titile: 'Azkaban',
                    url: require('../assets/icon/4.png')
                }
            ],

            listIcon: [
                {
                    titile: 'Dashboard',
                    url: require('../assets/icon/5.png')
                },
                {
                    titile: 'New Project',
                    url: require('../assets/icon/6.png')
                },
                {
                    titile: 'Services',
                    url: require('../assets/icon/7.png')
                },
                {
                    titile: 'Projects',
                    url: require('../assets/icon/8.png')
                },
                {
                    titile: 'Services',
                    url: require('../assets/icon/9.png')
                },
                {
                    titile: 'Users',
                    url: require('../assets/icon/10.png')
                },
                {
                    titile: 'Nodes',
                    url: require('../assets/icon/11.png')
                },
                {
                    titile: 'Scheduling',
                    url: require('../assets/icon/12.png')
                },
                {
                    titile: 'Hosts',
                    url: require('../assets/icon/13.png')
                },
                {
                    titile: 'History',
                    url: require('../assets/icon/14.png')
                }
                ,
                {
                    titile: 'Key Value',
                    url: require('../assets/icon/15.png')
                }
                ,
                {
                    titile: 'Executing',
                    url: require('../assets/icon/16.png')
                }
                ,
                {
                    titile: 'Alerts',
                    url: require('../assets/icon/17.png')
                }
                ,
                {
                    titile: 'New View',
                    url: require('../assets/icon/18.png')
                }
                ,
                {
                    titile: 'ACI',
                    url: require('../assets/icon/19.png')
                }
                ,
                {
                    titile: 'History',
                    url: require('../assets/icon/10.png')
                }
               
            ]
        }
    }
}
</script>

<style >
    .index-con {
        padding: 0 15%;
    }

    .index-header {
        padding: 10px 15%;
        background-image: linear-gradient(to right, #547ff0 , #46f0ed);

        display: flex;
        justify-content: space-between;
    }

    .index-header div {
        display: flex;
        align-items: center;
    }

    .top-right i {
        font-size: 18px;
        color: #fff;
        margin-right: 30px;
    }

    .top-right p {
        font-size: 16px;
        margin-right: 30px;
    }


    .index-header img {
        width: 60px;
        margin-right: 10px;
    }

    .index-header p {
       font-size: 18px;
       color: #fff;
    }

    .index-con ul {
        padding: 15px 0;

        display: flex;
        flex-wrap: wrap;
    }

    .index-con ul li {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .index-con ul li img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
    }

    .icon-top {
        border-radius: 10px;
        box-shadow: 0 0 12px 1px rgba( 0, 0, 0, 0.1);
        font-size: 16px;
        font-weight: bold;
        color: 
    }

    .icon-body li {
        margin-top: 30px;
        color: #666;
    }

    .icon-body li p,.icon-top  li p{width: 120px;}
    
    .listIcon{max-width: 150px;}
    .listIcon p{display: inline-block;}

    /* switch按钮样式 */
.switch .el-switch__label {
    position: absolute;
    display: none;
    color: #fff !important;
}
/*打开时文字位置设置*/
.switch .el-switch__label--right {
    z-index: 1;
}
/* 调整打开时文字的显示位子 */
.switch .el-switch__label--right span{
    margin-left: 9px;
}
/*关闭时文字位置设置*/
.switch .el-switch__label--left {
    z-index: 1;
}
/* 调整关闭时文字的显示位子 */
.switch .el-switch__label--left span{
    margin-left: 19px;
}
/*显示文字*/
.switch .el-switch__label.is-active {
    display: block;
}
/* 调整按钮的宽度 */
.switch.el-switch .el-switch__core,
.el-switch .el-switch__label {
     width: 50px !important;
     margin: 0;
}

</style>