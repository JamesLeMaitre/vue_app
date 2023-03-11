<script lang="ts">
import '../../assets/js/material-dashboard.min.js'
import '../../assets/css/material-dashboard.min.css'

import type { AxiosResponse } from 'axios'
import axios from 'axios'
import Swal from 'sweetalert2'

import type UserModel from '../../app/models/UserModel'
import Footer from '../asside/Footer.vue'

export default {
  name: 'Article',
  data() {
    return {
      users: [] as UserModel[],
      isLoading: true,
      isEditing: false,
      editingUserId: null // or -1
    }
  },
  methods: {
    async deleteUser(userid: number) {
      console.log(userid)
      try {
        const response = await axios.delete(`http://localhost:8000/api/v1/users/${userid}`);
        console.log(response.data.data);
        this.users = this.users.filter((user) => user.id !== userid);
      } catch (error) {
        console.log(error);
      }
    },
    showAlert(userid) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteUser(userid);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            text: 'User added successfully',
            showConfirmButton: false,
            timer: 1500
          })
        } else {

          Swal.fire("Annuler", "Suppression annulée!", "error");
        }
      })
    },

    async addUser(event: Event) {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const user: UserModel = {
        firstname: formData.get('firstname') as string,
        lastname: formData.get('lastname') as string,
        address: formData.get('address') as string,
        date_create: undefined,
        date_update: undefined,
        id: 0
      };
      try {
        const response = await axios.post<UserModel>('http://localhost:8000/api/v1/users', user);
        console.log(response.data);
        this.users.push(response.data);
        form.reset();

        Swal.fire({
          position: 'top-right',
          icon: 'success',
          toast: true,
          title: 'Success',
          text: 'User added successfully',
          showConfirmButton: false,
          timer: 2500
        }).then(() => {
          location.reload();
        });
      } catch (error: unknown) {
        console.error(error);
        if (axios.isAxiosError(error)) {
          const errorMessage = error.response?.data.message || 'Failed to add user';
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMessage,
          });
        }
      }

    },
    async updateUser(user: UserModel) {
      try {
        const response = await axios.put<UserModel>(`http://localhost:8000/api/v1/users/${user.id}`, user);
        console.log(response.data);

        const updatedUser = response.data;
        const index = this.users.findIndex(u => u.id === updatedUser.id);
        if (index > -1) {
          this.users.splice(index, 1, updatedUser);
        }
        this.isEditing = false;
        this.editingUserId = null;
        Swal.fire({
          title: 'Success!',
          text: 'User has been updated.',
          icon: 'success',
          confirmButtonText: 'OK',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          showConfirmButton: true,
        }).then(() => {
          location.reload();
        });
      } catch (error: unknown) {
        console.error(error);
        if (axios.isAxiosError(error)) {
          const errorMessage = error.response?.data.message || 'Failed to add user';
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMessage,
          });
        }
      }
    }


  },
  mounted() {
    axios.get('http://localhost:8000/api/v1/users')
      .then(response => {
        this.users = response.data.data
        this.isLoading = false
      })
      .catch(error => {
        console.log(error)
        this.isLoading = false
      })
  }
}


</script>
<template>
  <div class="container-fluid py-4">

    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header pb-0 p-3">
            <h6 class="mb-0">Add New User</h6>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="px-4">
              <form @submit.prevent="addUser">
                <div class="row">

                  <div class="col-md-4 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label">Firstname<span class="text-danger">&nbsp;</span></label>
                      <input v-model="firstname" type="text" id="firstname" name="firstname"
                        class="multisteps-form__input form-control" autocomplete="false" />
                    </div>
                  </div>
                  <!--  -->
                  <div class="col-md-4 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label">Lastname<span class="text-danger">&nbsp;*</span>
                      </label>
                      <input v-model="lastname" type="text" id="lastname" name="lastname"
                        class="multisteps-form__input form-control" autocomplete="false" />
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="input-group input-group-dynamic" id="stockClassik">
                      <label class="form-label">Address<span class="text-danger">&nbsp;*</span></label>
                      <input v-model="address" type="text" id="address" name="address"
                        class="multisteps-form__input form-control" autocomplete="false" />
                    </div>
                  </div>

                </div>



                <button class="btn btn-info btn-lg mt-4 btnSa" type="submit" id="addArticle">
                  Enregistrer
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header pb-0 p-3">
            <h6 class="mb-0">List of Users</h6>
          </div>

          <div class="card-body">
            <div class="table-responsive p-0">
              <table class="table table-flush" id="datatable-basic">
                <thead class="thead-light">
                  <tr>
                    <th class="text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                      Firstname
                    </th>
                    <th class="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                      Lastname
                    </th>

                    <th class="text-center text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                      Address
                    </th>
                    <th class="text-center text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                      Date Create
                    </th>
                    <th class="text-center text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                      Date Update
                    </th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="isLoading">Loading ...</tr>
                  <tr v-for="user in users" :key="user.id">
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ user.firstname }}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="text-md font-weight-bold mb-0"> {{ user.lastname }}
                      </h6>

                    </td>

                    <td class="text-center text-sm">
                      <h6 class="text-sm font-weight-bold mb-0">
                        {{ user.address }}
                      </h6>
                    </td>
                    <td class="text-center text-sm">
                      <h6 class="text-sm font-weight-bold mb-0">
                        {{ new Date(user.date_create).toLocaleString() }}
                      </h6>
                    </td>
                    <td class="text-center text-sm">
                      <h6 class="text-sm font-weight-bold mb-0">
                        {{ new Date(user.date_update).toLocaleString() }}
                      </h6>
                    </td>
                    <td class="align-content-start">
                      <div class="ms-auto text-center">


                        <button class="btn btn-link text-danger text-gradient px-3 mb-0 supArticle"
                          @click="showAlert(user.id)"><i class="material-icons text-sm me-2">delete</i>Delete</button>
                        <button class="btn btn-link text-dark px-3 mb-0 editArticle" @click="updateUser(user)"><i
                            class="material-icons text-sm me-2">edit</i>Edit</button>
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


