<template>
        <div>
            <el-input v-model="param" placeholder="请输入内容"  type="text" ></el-input>
            <el-button type="info"   @click="search">信息按钮</el-button>
            <audioCom :music-url='musicUrl' :key='musicUrl'></audioCom>
                <div>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column label="歌名" width="180">
                            <template slot-scope="scope">
                                <i class="el-icon-time"></i>
                                <span style="margin-left: 10px">{{ scope.row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="姓名"
                                width="180">
                            <template slot-scope="scope">
                                    <div slot="reference" class="name-wrapper">
                                        <span style="margin-left: 10px">{{ scope.row.artists[0].name }}</span>
                                    </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="图片"
                            width="180">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <div class="demo-image__placeholder">
                                    <div class="block">
                                        <el-image :src='scope.row.artists[0].img1v1Url'></el-image>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </el-table-column>

                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        @click="playMusic(scope.row.id)">播放</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            <div>

            </div>
        </div>
</template>

<script>
    import { searchMusic,getMusicById } from "../../api/home";
    import  audioCom  from  "./audio";
    export default {
         name: "musicHome",
        components: {audioCom},
        data() {
            return {
                param: '',
                tableData:'',
                musicUrl:''
            }
        },
    methods: {
        search() {
            searchMusic({
                keywords: this.param,
                type: 1,
            }).then(res => {
                this.tableData = res.result.songs

            })
        },
        playMusic(id) {
            getMusicById({
                id: id,
            }).then(res => {
                this.musicUrl = res.data[0].url

            })

        },
    }

    }

</script>

<style scoped>

</style>
