import { Link, useParams } from "react-router-dom";
import { fetchAllProfiles, fetchProfileByName } from "../sanity/profileServices";
import { useEffect, useState } from "react";

export default function Profile() {
  const { id } = useParams();
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState(null);

  const getAllProfiles = async () => {
    const data = await fetchAllProfiles();
    setProfiles(data);
  };

  const getProfileByName = async (name) => {
    const data = await fetchProfileByName(name);
    setCurrentProfile(data[0]);
  };

  useEffect(() => {
    getAllProfiles();
  }, []);

  useEffect(() => {
    if (id) {
      getProfileByName(id);
    }
  }, [id]);

  return (
    <>
      <h1>Profile, {id ? id : "Profiler"}</h1>
      {id == null ? (
        <section>
          <h2>All Profiles</h2>
          <ul>
            {profiles?.map((profile) => (
              <li key={profile._id}>
                <Link to={profile.name}>{profile.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section>
          <h2>Profile: {currentProfile?.name}</h2>
          <div>
            <p>Image: {currentProfile?.image}</p>
            <p>Email: {currentProfile?.email}</p>
            <p>Interesser: {currentProfile?.Interesser}</p>
            
            <h3>Logg:</h3>
            <ul>
              {currentProfile?.Logg?.map((logg, index) => (
                <li key={index}>
                  <p>Dato: {new Date(logg.dato).toLocaleDateString()}</p>
                  <p>Navn: {logg.Navn}</p>
                  <p>Arbeid: {logg.Arbeid}</p>
                  <p>Timer: {logg.Timer}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}