import { Card, CardContent, CardDescription, CardHeader,CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
    return(
        <DashboardCard title="Sales" subtitle="Test" body="Text" />
    )
}

type DashboardCardProps = {
    title: string;
    subtitle: string;
    body: string;
}

function DashboardCard({title,subtitle,body}:
    DashboardCardProps){
        return(
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{subtitle}</CardDescription>
                </CardHeader>
                <CardContent>{body}</CardContent>
            </Card>
        )
}

///created by Navinda Hewawickrama