'use client'

import { checkLogin } from "@/utils/helper";
import { useEffect, useState } from "react";
import { Link } from '@/i18n/navigation';

export default function Play(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      setIsLoggedIn(checkLogin());
  }, []);

  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <h1>The Paragon Game</h1>
          {isLoggedIn ? (
              <div>Play</div>
          ) : (
              <>
                  <div>Play as Guest</div>
                  <Link href = 'login'> <div>Log In</div> </Link>


              </>
          )}
      </div>
  );

}
