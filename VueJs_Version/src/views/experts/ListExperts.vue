<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Gestão de Especialistas" />
      <!--MENU TOPO-->
      <b-row class="mb-2 d-flex justify-content-end">
        <b-col cols="w-100">
          <router-link
            :to="{ name: 'addExpert' }"
            tag="button"
            class="btn btn-outline-success mr-2 mt-2"
          >
            <i class="fas fa-plus-square"></i> ADICIONAR ESPECIALISTA
          </router-link>
        </b-col>
      </b-row>
      <!--TABLE-->

      <table class="table table-striped table-responsive-sm">
        <thead class="thead-dark">
          <tr>
            <th scope="col" class="w-100">
              NOME
              <i
                class="fas fa-arrow-up"
                v-if="sortType === 1"
                @click="sort()"
              ></i>
              <i class="fas fa-arrow-down" v-else @click="sort()"></i>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="expert of experts" :key="expert._id">
            <td class="pt-4 w-100">{{ expert.name }}</td>
            <td class="d-flex justify-content-end align-items-center">
              <button
                @click="viewExpert(expert.id)"
                type="button"
                class="btn btn-outline-info btn-md mr-2 custom-btn"
              >
                <i class="fas fa-search"></i> VER
              </button>
              <router-link
                :to="{
                  name: 'editExpert',
                  params: { expertId: expert.id }
                }"
                tag="button"
                class="btn btn-outline-success btn-md mr-2 custom-btn"
              >
                <i class="fas fa-edit"></i> EDITAR
              </router-link>

              <button
                @click="removeExpert(expert.id)"
                type="button"
                class="btn btn-outline-danger btn-md custom-btn"
              >
                <i class="fas fa-trash-alt"></i> REMOVER
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </b-container>
  </section>
</template>

<script>
import { FETCH_EXPERTS, REMOVE_EXPERT } from "@/store/experts/expert.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import { mapGetters } from "vuex";

export default {
  name: "ManageExperts",
  components: {
    HeaderPage
  },
  data: function() {
    return {
      experts: [],
      sortType: 1
    };
  },
  computed: {
    ...mapGetters("expert", ["getExperts", "getMessage"])
  },
  methods: {
    fetchExperts() {
      this.$store.dispatch(`expert/${FETCH_EXPERTS}`).then(
        () => {
          this.experts = this.getExperts;
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    },
    sort() {
      this.experts.sort(this.compareNames);
      this.sortType *= -1;
    },
    compareNames(u1, u2) {
      if (u1.name > u2.name) return 1 * this.sortType;
      else if (u1.name < u2.name) return -1 * this.sortType;
      else return 0;
    },

    viewExpert(id) {
      const expert = this.experts.find(expert => expert.id === id);

      this.$fire({
        title: expert.name,
        html: this.generateTemplate(expert)
      });
    },

    generateTemplate(expert) {
      return `
            <h4>${expert.job}</h4>
            <p>Área de experiência: ${expert.expertise}</p> 
            <p>${expert.description}</p> 
          `;
    },
    removeExpert(id) {
      this.$confirm(
        "Se sim, clique em OK",
        "Deseja mesmo remover o expert?",
        "warning",
        { confirmButtonText: "OK", cancelButtonText: "Cancelar" }
      ).then(
        () => {
          this.$store.dispatch(`expert/${REMOVE_EXPERT}`, id).then(() => {
            this.$alert(this.getMessage, "Expert removido!", "success");
            this.fetchExperts();
          });
        },
        () => {
          this.$alert("Remoção cancelada!", "Informação", "info");
        }
      );
    }
  },
  created() {
    this.fetchExperts();
  }
};
</script>

<style scoped>
.custom-btn {
  min-width: 120px;
}
</style>
