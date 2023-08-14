<template>
  <ElRow>
      <ElCol :span="12" class="greeting__wrap">
          <div class="wrap">
              <template v-if="!isName">
                  <h1 class="heading">{{ $t('greeting') }} </h1>
                  <input type="text" v-model.lazy="name" :placeholder="$t('greetingNamePlaceholder')" @keyup.enter="saveNewName" @focusout="saveNewName" autofocus />
              </template>
              <template v-else>
                  <h1>{{ $t('greeting') }} {{name}}.</h1>
                  <el-button type="primary" @click="editName" class="button" size="small" title="Edit">
                      <el-icon>
                          <Edit />
                      </el-icon>
                  </el-button>
              </template>
          </div>
          <template v-if="!this.tasks.length">
              <h2>{{ $t('greetingTextNegative') }}</h2>
          </template>
          <template v-else>
              <h2>{{ $t('greetingTextPositive') }}</h2>
          </template>
      </ElCol>
  </ElRow>
</template>

<script>
export default {
    name: 'greeting',
    props: {
        tasks: Array,
    },
    data() {
      return {
        name: '',
        isName: false,
      }
    },
    mounted() {
      if (localStorage.name) {
        this.name = localStorage.name;
        this.isName = true;
      }
    },
    watch: {
      name(newName) {
        localStorage.name = newName;
    }
    },
    methods: {
      editName() {
        this.isName = false;
      },
      saveNewName() {
        this.isName = true;
      }
    }
}
</script>

<style>
.greeting__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    justify-content: center;
}
</style>
