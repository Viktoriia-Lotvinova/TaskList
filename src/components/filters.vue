<template>
  <el-radio-group v-model="radioGroup" @change="sentFilterValue">
    <el-radio-button :label="$t('filters.showAll')" />
    <el-radio-button :label="$t('filters.inProgress')" />
    <el-radio-button :label="$t('filters.done')" />
  </el-radio-group>
  <div class="no-tasks-text">
    <ElText type="danger" size="large" tag="b" v-if="this.showNoTasksMsg">{{ this.noTasksInThisStatusMsg }}</ElText>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
    name: 'filters',
    props: {
        radio: String,
        showNoTasksMsg: Boolean,
        noTasksInThisStatusMsg: String,
    },
    data() {
      return {
         radioGroup: this.radio,
      }
    },
    setup() {
      const { t } = useI18n({
        useScope: 'global'
      });

      const filtersShowAll = t('filters.showAll');
      const filtersInProgress = t('filters.inProgress');
      const filtersDone = t('filters.done');

      return {
        filtersShowAll,
        filtersInProgress,
        filtersDone,
      };
    },
    methods: {
      sentFilterValue() {
        this.$emit('variable-updated', this.radioGroup);
      }
    }
}
</script>

<style>
.danger {
    color: #F56C6C;
    font-size: 0.8rem;
}

.no-tasks-text {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #F56C6C;
}
</style>
