export default {
  name: 'profil',
  title: 'Profil',
  type: 'document',
  fields: [
    {name: 'image',
    type: 'image',
    },
    {
      
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'Interesser',
      title: 'Interesser',
      type: 'text',
    },
    {
      name: 'Logg',
      title: 'Logg',
      type: 'array',
     of: [
    {
      type: "object",
      name: "Logg",
      fields: [
        { type: "datetime", name: "dato" },
        { type: "string", name: "Navn" },
        { type: "string", name: "Arbeid" },
        { type: "string", name: "Timer" }
      ]
    }
  ],
    }
  ],
}