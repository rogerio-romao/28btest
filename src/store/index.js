import { createStore } from "vuex";

export default createStore({
  state: {
    data: [
      {
        user: "Andy Repp",
        date1: "Tomorrow 3PM",
        date2: "12 November 2017",
        account: "Dr Clinton Ackerman",
        specialty1: "Respiratory therapist",
        specialty2: "Assistive therapist",
        profile: "Confident",
        calls: 21,
      },
      {
        user: "Billy Smith",
        date1: "Tomorrow 10AM",
        date2: "16 June 2018",
        account: "Dr Jonas Feelgood",
        specialty1: "Rheumatology",
        specialty2: "Spinal Surgery",
        profile: "Professional",
        calls: 17,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
