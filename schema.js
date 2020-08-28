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

const UpcomingLaunches = new GraphQLObjectType({
  name: 'UpcomingLaunches',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    rocket: { type: Rocket },
    launch_date_utc: { type: GraphQLString },
    details: { type: GraphQLString },
    links: {
      type: new GraphQLObjectType({
        name: 'Links',
        fields: () => ({
          mission_patch: { type: GraphQLString },
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
            payload_mass_kg: { type: GraphQLInt },
          }),
        })
      ),
    },
  }),
});

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
      type: new GraphQLList(UpcomingLaunches),
      args: { limit: { type: GraphQLInt }, offset: { type: GraphQLInt } },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.spacexdata.com/v3/launches/upcoming?limit=${args.limit}&offset=${args.offset}`
          )
          .then(({ data }) => data);
      },
    },
    getLaunch: {
      type: UpcomingLaunches,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return axios
          .get('https://api.spacexdata.com/v3/launches/' + args.id)
          .then(({ data }) => data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
