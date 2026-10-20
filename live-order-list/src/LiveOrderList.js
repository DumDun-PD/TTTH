import { useEffect, useState } from "react";

function LiveOrderList() {
  const [order, setOrders] = useState([]);

  useEffect(() => {
    const handleNewOrders = () => {
      const newOrders = DataSource.getOrders();
      setOrders(newOrders)
    }
    DataSource.addListener(handleNewOrders)

    return () => {
      DataSource.removeListener(handleNewOrders)
    };
  }, []);

  return <LiveOrders order={order} />
}
