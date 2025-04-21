// src/sanity/profileServices.js
import { client } from "./client";

export async function fetchAllProfiles() {
  const data = await client.fetch(
    `*[_type == 'profil']{
      _id, 
      name, 
      image, 
      email, 
      Interesser, 
      Logg
    }`
  );
  return data;
}

export async function fetchProfileByName(name) {
  const data = await client.fetch(
    `*[_type == 'profil' && name == $name]{
      _id, 
      name, 
      image, 
      email, 
      Interesser, 
      Logg
    }`,
    { name }
  );
  return data;
}