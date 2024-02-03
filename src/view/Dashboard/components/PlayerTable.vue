  
<script setup>
const tableData = [
    {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    },
    {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 10,
        salary_num: 100000
    }, {
        profile: '/src/assets/images/profile-1.jpg',
        name: 'Antony',
        position: 'RW',
        salary_pre: 50,
        salary_num: 100000
    },
]
</script>

<template>
    <el-table :data="tableData" height="100%">
        <el-table-column prop="profile" label="#">
            <template #default="scope">
                <img style="width: 30px;height: 30px;" :src="scope.row.profile" alt="">
            </template>
        </el-table-column>
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="position" label="Position" />
        <el-table-column prop="salary_pre" label="Salary(%)">
            <template #default="scope">
                <el-progress :text-inside="true" :stroke-width="14" :percentage="scope.row.salary_pre" />
            </template>
        </el-table-column>
        <el-table-column prop="salary_num" label="Salary(￡)" />
        <el-table-column label="More">
            <template #default>
                <div class="action-btn">
                    <el-icon>
                        <InfoFilled />
                    </el-icon>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped lang="scss">
.action-btn {
    display: flex;
}
</style>
  