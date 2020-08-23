<template>
    <div>
        UserInfo

            <!--<el-form :model="emp" :rules="rules" ref="empForm">-->
            <!--    <el-row>-->
            <!--        <el-col :span="6">-->
            <!--            <el-form-item label="姓名:" prop="name">-->
            <!--                <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="emp.name"-->
            <!--                          placeholder="请输入员工姓名"></el-input>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="5">-->
            <!--            <el-form-item label="性别:" prop="gender">-->
            <!--                <el-radio-group v-model="emp.gender">-->
            <!--                    <el-radio label="男">男</el-radio>-->
            <!--                    <el-radio label="女">女</el-radio>-->
            <!--                </el-radio-group>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="6">-->
            <!--            <el-form-item label="出生日期:" prop="birthday">-->
            <!--                <el-date-picker-->
            <!--                        v-model="emp.birthday"-->
            <!--                        size="mini"-->
            <!--                        type="date"-->
            <!--                        value-format="yyyy-MM-dd"-->
            <!--                        style="width: 150px;"-->
            <!--                        placeholder="出生日期">-->
            <!--                </el-date-picker>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="7">-->
            <!--            <el-form-item label="政治面貌:" prop="politicId">-->
            <!--                <el-select v-model="emp.politicId" placeholder="政治面貌" size="mini" style="width: 200px;">-->
            <!--                    <el-option-->
            <!--                            v-for="item in politicsstatus"-->
            <!--                            :key="item.id"-->
            <!--                            :label="item.name"-->
            <!--                            :value="item.id">-->
            <!--                    </el-option>-->
            <!--                </el-select>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--    </el-row>-->
            <!--    <el-row>-->
            <!--        <el-col :span="6">-->
            <!--            <el-form-item label="民族:" prop="nationId">-->
            <!--                <el-select v-model="emp.nationId" placeholder="民族" size="mini" style="width: 150px;">-->
            <!--                    <el-option-->
            <!--                            v-for="item in nations"-->
            <!--                            :key="item.id"-->
            <!--                            :label="item.name"-->
            <!--                            :value="item.id">-->
            <!--                    </el-option>-->
            <!--                </el-select>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="5">-->
            <!--            <el-form-item label="籍贯:" prop="nativePlace">-->
            <!--                <el-input size="mini" style="width: 120px" prefix-icon="el-icon-edit"-->
            <!--                          v-model="emp.nativePlace" placeholder="请输入籍贯"></el-input>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="6">-->
            <!--            <el-form-item label="电子邮箱:" prop="email">-->
            <!--                <el-input size="mini" style="width: 150px" prefix-icon="el-icon-message"-->
            <!--                          v-model="emp.email" placeholder="请输入电子邮箱"></el-input>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="7">-->
            <!--            <el-form-item label="联系地址:" prop="address">-->
            <!--                <el-input size="mini" style="width: 200px" prefix-icon="el-icon-edit"-->
            <!--                          v-model="emp.address" placeholder="请输入联系地址"></el-input>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--    </el-row>-->
            <!--    <el-row>-->
            <!--        <el-col :span="6">-->
            <!--            <el-form-item label="职位:" prop="posId">-->
            <!--                <el-select v-model="emp.posId" placeholder="职位" size="mini" style="width: 150px;">-->
            <!--                    <el-option-->
            <!--                            v-for="item in positions"-->
            <!--                            :key="item.id"-->
            <!--                            :label="item.name"-->
            <!--                            :value="item.id">-->
            <!--                    </el-option>-->
            <!--                </el-select>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="5">-->
            <!--            <el-form-item label="职称:" prop="jobLevelId">-->
            <!--                <el-select v-model="emp.jobLevelId" placeholder="职称" size="mini" style="width: 150px;">-->
            <!--                    <el-option-->
            <!--                            v-for="item in joblevels"-->
            <!--                            :key="item.id"-->
            <!--                            :label="item.name"-->
            <!--                            :value="item.id">-->
            <!--                    </el-option>-->
            <!--                </el-select>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="6">-->
            <!--            <el-form-item label="所属部门:" prop="departmentId">-->
            <!--                <el-popover-->
            <!--                        placement="right"-->
            <!--                        title="请选择部门"-->
            <!--                        width="200"-->
            <!--                        trigger="manual"-->
            <!--                        v-model="popVisible">-->
            <!--                    <el-tree default-expand-all :data="allDeps" :props="defaultProps"-->
            <!--                             @node-click="handleNodeClick"></el-tree>-->
            <!--                    <div slot="reference"-->
            <!--                         style="width: 150px;display: inline-flex;font-size: 13px;border: 1px solid #dedede;height: 26px;border-radius: 5px;cursor: pointer;align-items: center;padding-left: 8px;box-sizing: border-box"-->
            <!--                         @click="showDepView">{{inputDepName}}-->
            <!--                    </div>-->
            <!--                </el-popover>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="7">-->
            <!--            <el-form-item label="电话号码:" prop="phone">-->
            <!--                <el-input size="mini" style="width: 200px" prefix-icon="el-icon-phone"-->
            <!--                          v-model="emp.phone" placeholder="电话号码"></el-input>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--    </el-row>-->
            <!--    <el-row>-->
            <!--        <el-col :span="6">-->
            <!--            <el-form-item label="工号:" prop="workID">-->
            <!--                <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit"-->
            <!--                          v-model="emp.workID" placeholder="工号" disabled></el-input>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="5">-->
            <!--            <el-form-item label="学历:" prop="tiptopDegree">-->
            <!--                <el-select v-model="emp.tiptopDegree" placeholder="学历" size="mini"-->
            <!--                           style="width: 150px;">-->
            <!--                    <el-option-->
            <!--                            v-for="item in tiptopDegrees"-->
            <!--                            :key="item"-->
            <!--                            :label="item"-->
            <!--                            :value="item">-->
            <!--                    </el-option>-->
            <!--                </el-select>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="6">-->
            <!--            <el-form-item label="毕业院校:" prop="school">-->
            <!--                <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit"-->
            <!--                          v-model="emp.school" placeholder="毕业院校名称"></el-input>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="7">-->
            <!--            <el-form-item label="专业名称:" prop="specialty">-->
            <!--                <el-input size="mini" style="width: 200px" prefix-icon="el-icon-edit"-->
            <!--                          v-model="emp.specialty" placeholder="请输入专业名称"></el-input>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--    </el-row>-->
            <!--    <el-row>-->
            <!--        <el-col :span="6">-->
            <!--            <el-form-item label="入职日期:" prop="beginDate">-->
            <!--                <el-date-picker-->
            <!--                        v-model="emp.beginDate"-->
            <!--                        size="mini"-->
            <!--                        type="date"-->
            <!--                        value-format="yyyy-MM-dd"-->
            <!--                        style="width: 130px;"-->
            <!--                        placeholder="入职日期">-->
            <!--                </el-date-picker>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="6">-->
            <!--            <el-form-item label="转正日期:" prop="conversionTime">-->
            <!--                <el-date-picker-->
            <!--                        v-model="emp.conversionTime"-->
            <!--                        size="mini"-->
            <!--                        type="date"-->
            <!--                        value-format="yyyy-MM-dd"-->
            <!--                        style="width: 130px;"-->
            <!--                        placeholder="转正日期">-->
            <!--                </el-date-picker>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="6">-->
            <!--            <el-form-item label="合同起始日期:" prop="beginContract">-->
            <!--                <el-date-picker-->
            <!--                        v-model="emp.beginContract"-->
            <!--                        size="mini"-->
            <!--                        type="date"-->
            <!--                        value-format="yyyy-MM-dd"-->
            <!--                        style="width: 130px;"-->
            <!--                        placeholder="合同起始日期">-->
            <!--                </el-date-picker>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="6">-->
            <!--            <el-form-item label="合同终止日期:" prop="endContract">-->
            <!--                <el-date-picker-->
            <!--                        v-model="emp.endContract"-->
            <!--                        size="mini"-->
            <!--                        type="date"-->
            <!--                        value-format="yyyy-MM-dd"-->
            <!--                        style="width: 150px;"-->
            <!--                        placeholder="合同终止日期">-->
            <!--                </el-date-picker>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--    </el-row>-->
            <!--    <el-row>-->
            <!--        <el-col :span="8">-->
            <!--            <el-form-item label="身份证号码:" prop="idCard">-->
            <!--                <el-input size="mini" style="width: 180px" prefix-icon="el-icon-edit"-->
            <!--                          v-model="emp.idCard" placeholder="请输入身份证号码"></el-input>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="8">-->
            <!--            <el-form-item label="聘用形式:" prop="engageForm">-->
            <!--                <el-radio-group v-model="emp.engageForm">-->
            <!--                    <el-radio label="劳动合同">劳动合同</el-radio>-->
            <!--                    <el-radio label="劳务合同">劳务合同</el-radio>-->
            <!--                </el-radio-group>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--        <el-col :span="8">-->
            <!--            <el-form-item label="婚姻状况:" prop="wedlock">-->
            <!--                <el-radio-group v-model="emp.wedlock">-->
            <!--                    <el-radio label="已婚">已婚</el-radio>-->
            <!--                    <el-radio label="未婚">未婚</el-radio>-->
            <!--                    <el-radio label="离异">离异</el-radio>-->
            <!--                </el-radio-group>-->
            <!--            </el-form-item>-->
            <!--        </el-col>-->
            <!--    </el-row>-->
            <!--</el-form>-->
        </div>

</template>

<script>
    export default {
        name: "userinfo"
    }
</script>

<style>

</style>