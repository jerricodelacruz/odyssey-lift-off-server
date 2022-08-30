const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Query{
    "Query to get tracks array for the homepage url"
    tracksForHome:[Track!]!
    "Query to get track specific id"
    track(id: ID!):Track
}

type Mutation {
    incrementTrackViews(id: ID!):IncrementTrackViewsResponse
}

type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
}

"Attack is group of Modules that teaches about specific topic"
type Track {
    id : ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display in track card or track page detail"
    thumbnail: String
    "the track's approximate length to complete, in seocnds"
    length: Int @deprecated(reason: "Use durationInSeconds")
    "The track's full duration, in seconds"
    durationInSeconds: Int
    "the number of modules this track contains"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
}

"A Module is a single unit of teaching. Multiple Modules compose a Track"
type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds")
    "The module's video duration, in seconds"
    durationInSeconds: Int
}

"Author of a complete Track"
type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
}
`;

module.exports = typeDefs;