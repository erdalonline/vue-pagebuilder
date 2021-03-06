import { Component, Prop } from "vue-property-decorator";

import Vue from "vue";
import { Row } from "../../models/Row";
//@ts-ignore
import Plus from "../../svgs/PlusIcon.vue";
//@ts-ignore
import SettingsIcon from "../../svgs/SettingsIcon.vue";
//@ts-ignore
import Grid6 from "../../svgs/Grid66Icon.vue";
//@ts-ignore
import Grid12 from "../../svgs/Grid12Icon.vue";
//@ts-ignore
import Grid84 from "../../svgs/Grid84Icon.vue";
//@ts-ignore
import Grid48 from "../../svgs/Grid48Icon.vue";
import { Article } from "@/pagebuilder/models/Article";
import { RowService } from "@/pagebuilder/services/RowService";

@Component({
  components: {
    Plus,
    SettingsIcon,
    Grid6,
    Grid12,
    Grid48,
    Grid84,
  },
})
export default class RowSpacerComponent extends Vue {
  @Prop()
  row: Row;
  @Prop()
  rowArrayIndex: number;

  isSelectGridOpen: boolean = false;
  isSettingsOpen: boolean = false;

  createRow(columnLayout: string[]) {
    let row = RowService.createNew(columnLayout);
    this.article.rows.splice(this.rowArrayIndex + 1, 0, row);
    this.isSelectGridOpen = false;
  }

  deleteRow() {
    RowService.delete(this.row);
  }

  get article(): Article {
    return this.$store.getters.article;
  }
}
