import get_template from "../../components/get_template.js";
 

export default {
  data: function () {
    return {
      nome: null,
      email: null,
      password: null,
    };
  },

   
  methods: {
    cadastra() {
      alert("oii");
      axios
        .post("http://127.0.0.1:3333/api/user", { 
                  nome: "joaquim",
                  email: "joaquim",
                  password: "joaquim",
                })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        })
        .then(function () {
          // sempre será executado
        });
    },
  },

  template: await get_template("./assets/js/view/cadastro/home"),
};
