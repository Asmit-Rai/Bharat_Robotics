"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

// Define Firestore Data Type
interface FirestoreData {
  id: string;
  [key: string]: string | number | Timestamp | null;
}

// Fetch Data Function
async function fetchDataFromFirestore(collectionName: string): Promise<FirestoreData[]> {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

const Statics: React.FC = () => {
  const [contactUsData, setContactUsData] = useState<FirestoreData[]>([]);
  const [courseApplicantsData, setCourseApplicantsData] = useState<FirestoreData[]>([]);
  const [usersIdeasData, setUsersIdeasData] = useState<FirestoreData[]>([]);
  const [activeTab, setActiveTab] = useState<"contactUs" | "courseApplicants" | "usersIdeas">(
    "contactUs"
  );

  useEffect(() => {
    async function fetchData() {
      setContactUsData(await fetchDataFromFirestore("contactUs"));
      setCourseApplicantsData(await fetchDataFromFirestore("courseApplicants"));
      setUsersIdeasData(await fetchDataFromFirestore("usersIdeas"));
    }
    fetchData();
  }, []);

  const renderData = () => {
    let data: FirestoreData[];

    switch (activeTab) {
      case "contactUs":
        data = contactUsData;
        break;
      case "courseApplicants":
        data = courseApplicantsData;
        break;
      case "usersIdeas":
        data = usersIdeasData;
        break;
      default:
        data = [];
    }

    if (data.length === 0) {
      return <p className="text-center text-gray-500">No data available</p>;
    }

    return (
      <Card className="w-full max-w-6xl shadow-lg">
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                {Object.keys(data[0])
                  .filter((key) => key !== "id")
                  .map((key) => (
                    <TableHead key={key} className="font-bold capitalize">
                      {key}
                    </TableHead>
                  ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  {Object.keys(item)
                    .filter((key) => key !== "id")
                    .map((key) => {
                      let value = item[key];

                      // Convert Firestore timestamp to readable format
                      if (value instanceof Timestamp) {
                        value = new Date(value.seconds * 1000).toLocaleString();
                      }

                      return <TableCell key={key}>{String(value)}</TableCell>;
                    })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-10 bg-gray-100">
      <h1 className="text-5xl font-bold mb-6">Admin Dashboard</h1>

      <div className="flex space-x-4 mb-6">
        <Button
          onClick={() => setActiveTab("contactUs")}
          variant={activeTab === "contactUs" ? "default" : "outline"}
        >
          Contact Us
        </Button>
        <Button
          onClick={() => setActiveTab("courseApplicants")}
          variant={activeTab === "courseApplicants" ? "default" : "outline"}
        >
          Course Applicants
        </Button>
        <Button
          onClick={() => setActiveTab("usersIdeas")}
          variant={activeTab === "usersIdeas" ? "default" : "outline"}
        >
                Users&apos; Ideas
        </Button>
      </div>

      {renderData()}
    </div>
  );
};

export default Statics;
