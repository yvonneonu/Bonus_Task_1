SELECT TenantName
FROM Tenants
INNER JOIN
(SELECT TenantID FROM AptTenants GROUP BY TenantID HAVING COUNT(*) > 1) C
ON Tenants.TenanID = C.TenantID






SELECT BuildingNne, ISNULL(Count, 0) as 'Count'
FROM Buildings
LEFT JOIN
(SELECT Apartments.BuldingID, count(*) as 'Count'
FROM Requests INNER JOIN Apartments
ON Requests.AptID = Apartments.AptID
WHERE Requests.Status = 'Open'
GROUP BY Apartments.BuildingID) ReqCounts
ON ReqCounts.BuildingID = Buildings.BuidingID
  
        // Return true if odd count is 0 or 1,
        return true;
    }
  
    // Driver code
    public static void main(String args[])
    {
        if (canFormPalindrome("geeksforgeeks"))
            System.out.println("Yes");
        else
            System.out.println("No");
  
        if (canFormPalindrome("geeksogeeks"))
            System.out.println("Yes");
        else
            System.out.println("No");
    }
}
  