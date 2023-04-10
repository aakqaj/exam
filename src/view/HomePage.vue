<template>
  <div id="home">
    <div class="search">
      <div class="mt-4">
        <el-input
          v-model="searchVal"
          placeholder="Please input"
          class="input-with-select"
          @change="search"
        >
          <template #append>
            <el-button @click="search" :icon="Search" />
          </template>
        </el-input>
      </div>

      <el-button type="primary" @click="add">新增</el-button>
    </div>

    <div class="table">
      <el-table :data="userStore.UserInfoList" style="width: 100%">
        <el-table-column label="Id" width="180">
          <template #default="scope">
            <div class="id">
              {{ scope.row.id }}
            </div>
          </template>
        </el-table-column>

        <el-table-column label="Name" width="180">
          <template #default="scope">
            <div class="id">
              {{ scope.row.name }}
            </div>
          </template>
        </el-table-column>

        <el-table-column label="Age" width="180">
          <template #default="scope">
            <div class="id">
              {{ scope.row.age }}
            </div>
          </template>
        </el-table-column>

        <el-table-column label="Adress" width="180">
          <template #default="scope">
            <div class="id">
              {{ scope.row.address }}
            </div>
          </template>
        </el-table-column>

        <el-table-column label="Operations">
          <template #default="scope">
            <el-button size="small" @click="edit(scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="userStore.deleteItem(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="mdraw">
      <el-drawer v-model="drawer" :title="dTitle" direction="rtl">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
          status-icon
          :key="ruleForm.id"
        >
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model="ruleForm.age" />
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input v-model="ruleForm.address" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submit(ruleFormRef)">
              {{ dTitle === "新增" ? "新增" : "编辑" }}
            </el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from "element-plus";
import { Search } from "@element-plus/icons-vue";
const searchVal = ref("");
const userStore = useUserStore();
const drawer = ref(false);
const dTitle = ref("新增");

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  id: -1,
  name: "",
  age: "",
  address: "",
});

const rules = reactive<FormRules>({
  name: [{ required: true, message: "Please input  name", trigger: "change" }],
  age: [{ required: true, message: "Please input  age", trigger: "change" }],
  address: [
    { required: true, message: "Please input  address", trigger: "change" },
  ],
});

function search() {
  userStore.search(searchVal.value);
}

function add() {
  drawer.value = true;
  dTitle.value = "新增";
  ruleForm.id = -1;
  ruleForm.name = "";
  ruleForm.age = "";
  ruleForm.address = "";
}

function edit(data: UserInfo) {
  drawer.value = true;
  dTitle.value = "编辑";
  ruleForm.id = data.id;
  ruleForm.name = data.name;
  ruleForm.age = data?.age?.toString();
  ruleForm.address = data.address;
}

function submit(formEl: any) {
  formEl.validate((pass: boolean) => {
    if (!pass) return;

    const data: UserInfo = {
      id: ruleForm.id,
      name: ruleForm.name,
      age: parseInt(ruleForm.age),
      address: ruleForm.address,
    };
    if (dTitle.value === "编辑") {
      userStore.updateItem(data);
    } else {
      userStore.addItem(data);
    }

    drawer.value = false;
  });
}
</script>

<style scoped lang="scss">
#home {
  padding: 20px 10px;
}
.search {
  width: 320px;
  display: flex;

  justify-content: space-between;
}
</style>
