import { useEffect, useState } from "react";

function NewsletterList() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const handleNewUsers = () => {
      const newUsers = DataSource.getSubcribers();
      setUsers(newUsers)
    }
    DataSource.addListener(handleNewUsers)

    return () => {
      DataSource.removeListener(handleNewUsers)
    };
  }, []);

  return <LiveUsers order={users} />
}
