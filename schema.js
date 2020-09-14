const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
} = graphql;

const Rocket = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLID },
    rocket_name: { type: GraphQLString },
    stages: { type: GraphQLInt },
    description: { type: GraphQLString },
    flickr_images: { type: new GraphQLList(GraphQLString) },
    second_stage: { type: SecondStage },
    height: {
      type: new GraphQLObjectType({
        name: 'Height',
        fields: () => ({
          meters: {
            type: GraphQLFloat,
          },
        }),
      }),
    },
    first_flight: { type: GraphQLString },
  }),
});

const Launches = new GraphQLObjectType({
  name: 'Launches',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    rocket: { type: Rocket },
    launch_date_utc: { type: GraphQLString },
    details: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    is_tentative: { type: GraphQLBoolean },
    tentative_max_precision: { type: GraphQLString },
    upcoming: { type: GraphQLBoolean },
    links: {
      type: new GraphQLObjectType({
        name: 'Links',
        fields: () => ({
          mission_patch: { type: GraphQLString },
          video_link: { type: GraphQLString },
        }),
      }),
    },
  }),
});

const SecondStage = new GraphQLObjectType({
  name: 'SecondStage',
  fields: () => ({
    payloads: {
      name: 'Payloads',
      type: new GraphQLList(
        new GraphQLObjectType({
          name: 'Payload',
          fields: () => ({
            payload_type: { type: GraphQLString },
            payload_id: { type: GraphQLString },
            manufacturer: { type: GraphQLString },
            payload_mass_kg: { type: GraphQLFloat },
          }),
        })
      ),
    },
  }),
});

// const Headers = new GraphQLObjectType({
//   name: 'Headers',
//   fields: () => ({
//     count: {
//       type: GraphQLString,
//       resolve: (headers) => {
//         headers['server'];
//       },
//     },
//   }),
// });

const totalCount = GraphQLInt;

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getAllRockets: {
      type: new GraphQLList(Rocket),

      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/rockets`)
          .then(({ data }) => data);
      },
    },
    getUpcomingLaunches: {
      type: new GraphQLList(Launches),
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches/upcoming`)
          .then(({ data }) => data);
      },
    },
    getLaunch: {
      type: Launches,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return axios
          .get('https://api.spacexdata.com/v3/launches/' + args.id)
          .then(({ data }) => data);
      },
    },
    getAllLaunches: {
      type: new GraphQLList(Launches),
      args: { limit: { type: GraphQLInt }, offset: { type: GraphQLInt } },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.spacexdata.com/v3/launches?limit=${args.limit}&offset=${args.offset}`
          )
          .then(({ data }) => data);
      },
    },
    totalCount: {
      type: totalCount,
      resolve() {
        return axios
          .get('https://api.spacexdata.com/v3/launches/')
          .then((res) => res.headers['spacex-api-count']);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
