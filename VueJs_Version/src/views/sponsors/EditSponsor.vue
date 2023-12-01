<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Editar Patrocinador" />

      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="update">
            <div class="form-group">
              <input
                v-model="sponsor.name"
                type="text"
                class="form-control form-control-lg"
                id="txtName"
                placeholder="escreve o nome"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="prefanimal"
                type="text"
                class="form-control form-control-lg"
                id="txtAnimal"
                placeholder="escreve o animal favorito"
                required
              />
            </div>

            <div class="form-group">
              <select
                id="sltGroup"
                class="form-control form-control-lg"
                v-model="sponsor.category"
                required
              >
                <option value>-- SELECIONA CATEGORIA --</option>
                <option
                  v-for="(label, value) in categories"
                  :value="value"
                  :key="value"
                >
                  {{ label }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <textarea
                id="txtDescription"
                class="form-control form-control-lg"
                placeholder="escreve descrição"
                cols="30"
                rows="10"
                v-model="sponsor.description"
                required
              ></textarea>
            </div>

            <div class="button-group">
              <button
                type="button"
                class="btn btn-outline-clear"
                @click="removeComments()"
              >
                <i class="fas fa-edit"></i> REMOVER COMENTÁRIOS
              </button>
              <button type="submit" class="btn btn-outline-success">
                <i class="fas fa-edit"></i> ATUALIZAR
              </button>
              <router-link
                :to="{ name: 'listSponsors' }"
                tag="button"
                class="btn btn-outline-danger"
              >
                <i class="fas fa-window-close"></i> CANCELAR
              </router-link>
            </div>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { EDIT_SPONSOR } from "@/store/sponsors/sponsor.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "EditSponsor",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      sponsor: {},
      categories: {
        Promotional: "Promocional",
        "Recurring donation": "Doação Recorrente",
        "One-off donation": "Doação Única",
        Other: "Outros"
      }
    };
  },
  computed: {
    ...mapGetters("sponsor", ["getSponsorsById", "getMessage"])
  },
  methods: {
    removeComments() {
      this.sponsor.comments.length = 0;
      this.$alert(
        "Comentários removidos, clique em atualizar!",
        "Comentários!",
        "success"
      );
    },
    update() {
      this.$store.dispatch(`sponsor/${EDIT_SPONSOR}`, this.$data.sponsor).then(
        () => {
          this.$alert(this.getMessage, "Sponsor atualizado!", "success");
          router.push({ name: "listSponsors" });
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    }
  },
  created() {
    this.sponsor = this.getSponsorsById(this.$route.params.sponsorId);
  }
};
</script>

<style scoped>
.center_div {
  margin: 0 auto;
  width: 80%;
}

.btn-outline-clear {
  background-color: transparent;
  border: 1px solid var(--purple);
  color: var(--purple);
}

.btn-outline-clear:hover {
  background-color: var(--purple);
  color: var(--white);
}

.button-group {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 2fr 1fr 1fr;
}

.button-group .btn {
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1rem;

  width: 100%;
}

@media screen and (max-width: 768px) {
  .button-group {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  .button-group .btn-outline-clear {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .button-group .btn-outline-danger {
    grid-column-start: 1;
  }

  .button-group .btn-outline-success {
    grid-column-start: 2;
    grid-column-end: 4;
  }
}
</style>
