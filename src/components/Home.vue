<template>
  <div class="home">
    <div class="wrapper">
      <div class="menu">
        <div class="submenu">
          <div class="menu-title">Welcome,</div>
          <div class="menu-item">
            {{ info.user }}
          </div>
        </div>
        <div class="submenu">
          <div class="menu-title">Metrics</div>
          <div class="menu-item" v-for="metric in metricsMenu" :key="metric">
            {{ metric }}
          </div>
        </div>
        <div class="submenu">
          <div class="menu-title">Information</div>
          <div class="menu-item" v-for="info in informationMenu" :key="info">
            {{ info }}
          </div>
        </div>
      </div>
      <div class="overview">
        <div class="overview-title">Overview</div>
        <div class="calls">
          <div class="calls-info">
            <div class="calls-info-title">Next Call</div>
            <div class="calls-info-wrapper">
              <div class="calls-info-title">Date:</div>
              <div class="calls-info-text">
                <div>{{ info.date1 }}</div>
                <div>{{ info.date2 }}</div>
              </div>
              <div class="calls-info-title">Account:</div>
              <div class="calls-info-text">
                <div>{{ info.account }}</div>
              </div>
              <div class="calls-info-title">Specialty:</div>
              <div class="calls-info-text">
                <div>{{ info.specialty1 }}</div>
                <div>{{ info.specialty2 }}</div>
              </div>
              <div class="calls-info-title">Profile:</div>
              <div class="calls-info-text">
                <div>{{ info.profile }}</div>
              </div>
            </div>
          </div>
          <div class="calls-month">
            <div class="calls-month-title">Calls this month</div>
            <div class="calls-graph-wrapper">
              <div class="calls-graph"></div>
            </div>
          </div>
        </div>
        <div class="topic-breakdown">
          <div class="topic-breakdown-title">Detailing topic breakdown</div>
          <div class="topics">
            <div class="topic">
              <span class="icon adherence"></span>
              Adherence
            </div>
            <div class="topic">
              <span class="icon combination"></span>
              Combination therapy
            </div>
            <div class="topic">
              <span class="icon dosing"></span>
              Dosing
            </div>
            <div class="topic">
              <span class="icon guidelines"></span>
              Guidelines
            </div>
            <div class="topic">
              <span class="icon safety"></span>
              Safety
            </div>
            <div class="topic">
              <span class="icon other"></span>
              Other
            </div>
          </div>
        </div>
        <div class="bar-graphs">
          <div class="bar-graphs-title">Avg. all</div>
          <div class="bar-graph"></div>
          <div class="bar-graphs-title">Cautious</div>
          <div class="bar-graph"></div>
          <div class="bar-graphs-title">Complaints</div>
          <div class="bar-graph"></div>
          <div class="bar-graphs-title">Confident</div>
          <div class="bar-graph"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      info: {},
      metricsMenu: ["Overview", "Detailing", "Calls"],
      informationMenu: ["About profiles", "Detailing targets"],
    };
  },
  created() {
    this.info =
      this.$store.state.data[
        Math.floor(Math.random() * this.$store.state.data.length)
      ];
  },
};
</script>

<style>
.home {
  box-sizing: border-box;
  margin: 0;
  font-family: sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  width: 90%;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 4fr;
}

.menu {
  background-color: #333;
}

.menu-title {
  color: #777;
}

.menu-item {
  color: white;
  margin-top: 1rem;
  cursor: pointer;
}

.submenu {
  margin-left: 2rem;
  margin-top: 3rem;
}

.overview {
  background-color: #f5f5f5;
  display: grid;
  grid-template-rows: 1fr 3.5fr 2fr 3.5fr;
  padding: 3rem 2rem;
  color: #333;
  line-height: 1.8;
}

.overview-title {
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-weight: bold;
}

.calls {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.calls-info-title,
.calls-month-title,
.topic-breakdown-title,
.bar-graphs-title {
  font-weight: bold;
  margin-bottom: 1rem;
}

.calls-info-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.calls-graph-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calls-graph {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: blue;
}

.topic-breakdown {
  width: 100%;
  margin-top: 1.5rem;
}

.topics {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

span.icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  margin-right: 0.5rem;
}

span.icon.adherence {
  background-color: #1a8ddd;
}

span.icon.combination {
  background-color: #35ddb3;
}

span.icon.dosing {
  background-color: #dddc61;
}

span.icon.guidelines {
  background-color: #dd6844;
}

span.icon.safety {
  background-color: #8f71dd;
}

span.icon.other {
  background-color: #dddddd;
}

.bar-graph {
  border: 1px solid black;
  background-color: #ddd;
  width: 100%;
  height: 15px;
  margin-bottom: 1rem;
}
</style>
