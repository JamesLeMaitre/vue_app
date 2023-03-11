<script lang="ts">
import Vue from 'vue'

import axios from 'axios'
import VueResource from 'vue-resource/types/vue_resource'

Vue.use(VueResource as typeof VueResource)


export default {
  name: 'Article',
  data() {
    return {
      articles: [],
      isLoading: false
    }
  },
  methods: {
      
  },

  mounted() {
    this.$http.get("http://localhost:8000/api/v1/users")
      .then(response => {
        this.articles = response.body
      })
      .catch(error => {
        console.log("Error: ", error)
      })
  } 
}

</script>
<template>
  <div class="container-fluid py-4">
    <!-- <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header pb-0 p-3">
            <h6 class="mb-0">Formulaire Article</h6>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="px-4">
              <form>
                <div class="row">

                  <div class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label">Numéro<span class="text-danger">&nbsp;*</span></label>
                      <input type="text" id="numero" name="numero" class="multisteps-form__input form-control"
                        autocomplete="false" />
                    </div>
                  </div>

                  <div id="flu" class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label">Désignation<span class="text-danger">&nbsp;*</span>
                      </label>
                      <input type="text" id="designation" name="designation" class="multisteps-form__input form-control"
                        autocomplete="false" />
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic" id="stockClassik">
                      <label class="form-label">Quantité carton<span class="text-danger">&nbsp;*</span></label>
                      <input type="number" id="qc" name="qc" class="multisteps-form__input form-control"
                        autocomplete="false" />
                    </div>
                  </div>

                  <div id="flu" class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label">Quantité de piece par carton<span
                          class="text-danger">&nbsp;*</span></label>
                      <input type="number" id="qpc" name="qpc" class="multisteps-form__input form-control"
                        autocomplete="false" />
                    </div>
                  </div>
                </div>

                <button class="btn btn-primary justify-content-center btn-lg mt-4 " type="submit">
                  Enregistrer
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header pb-0 p-3">
            <h6 class="mb-0">Collection d'articles</h6>
          </div>

          <div class="card-body">
            <div class="table-responsive p-0">
              <table class="table table-flush" id="datatable-basic">
                <thead class="thead-light">
                  <tr>
                    <th class="text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                      Numéro
                    </th>
                    <th class="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                      Désignation
                    </th>
                    <th class="text-center text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                      Quantité carton
                    </th>
                    <th class="text-center text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                      Qté pièce par carton
                    </th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="5">
                      <p class="mx-auto mt-4" v-if="isLoading">Loading...</p>
                    </td>
                  </tr>

                  <tr v-for="a in articles" :key="a.id">
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ a.numero }}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="text-sm font-weight-bold mb-0">
                      </h6>
                      <p class="text-sm text-secondary mb-0">
                        {{ a.designation }}
                      </p>
                    </td>
                    <td class="text-center text-sm">
                      <h6 class="text-sm font-weight-bold mb-0">

                      </h6>
                      <p class="text-sm text-secondary mb-0">
                        {{ a.qc }}
                      </p>
                    </td>
                    <td class="text-center text-sm">
                      <h6 class="text-sm font-weight-bold mb-0">

                      </h6>
                      <p class="text-sm text-secondary mb-0">
                        {{ a.qpc }}
                      </p>
                    </td>
                    <td class="align-content-start">
                      <div class="ms-auto text-center">


                        <button class="btn btn-link text-danger text-gradient px-3 mb-0 supArticle"><i
                            class="material-icons text-sm me-2">delete</i>Supprimer</button>
                        <button class="btn btn-link text-dark px-3 mb-0 editArticle"><i
                            class="material-icons text-sm me-2">edit</i>Modifier</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
