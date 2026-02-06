
import {
    Table,
    TableBody,
    TableCell,

    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

type Log = {
    id: number
    correlation_id: string
    app_key: string
    source_type: string
    source_name: string
    api_name: string
    method: "GET" | "POST" | "PUT" | "DELETE"
    endpoint: string
    status: "success" | "failure"
    status_code: number
    latency_ms: number
    error_type?: string
    error_message?: string
    environment: "prod" | "staging" | "dev"
    created_at: string
}

const LOGS: Log[] = [
    {
        id: 101,
        correlation_id: "c-123",
        app_key: "expense-bot",
        source_type: "slack",
        source_name: "slash_command",
        api_name: "submit_expense",
        method: "POST",
        endpoint: "/expense/submit",
        status: "success",
        status_code: 200,
        latency_ms: 420,
        environment: "prod",
        created_at: "10:01",
    },
    {
        id: 102,
        correlation_id: "c-123",
        app_key: "expense-bot",
        source_type: "third_party",
        source_name: "FreshService",
        api_name: "create_ticket",
        method: "POST",
        endpoint: "/tickets",
        status: "failure",
        status_code: 401,
        latency_ms: 680,
        error_type: "auth_error",
        error_message: "Invalid API key",
        environment: "prod",
        created_at: "10:01",
    },
    {
        id: 103,
        correlation_id: "c-124",
        app_key: "ops-bot",
        source_type: "internal",
        source_name: "internal_api",
        api_name: "fetch_user",
        method: "GET",
        endpoint: "/users/{id}",
        status: "success",
        status_code: 200,
        latency_ms: 120,
        environment: "prod",
        created_at: "10:03",
    },
]


export function LogsTable() {
    return (
        <div className="bg-background text-sm rounded-xl border">
            {/* Header */}
            <div className="px-6 py-5 border-b bg-muted/40">
                <h2 className="text-2xl font-semibold">API Logs</h2>
                <p className="text-sm text-muted-foreground">
                    Request & integration activity
                </p>
            </div>

            {/* Table */}
            <div className="relative overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Correlation ID</TableHead>
                            <TableHead>App</TableHead>
                            <TableHead>Source</TableHead>
                            <TableHead>API</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead>Endpoint</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Code</TableHead>
                            <TableHead>Latency</TableHead>
                            <TableHead>Error</TableHead>
                            <TableHead>Env</TableHead>
                            <TableHead className="text-right">Time</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {LOGS.map((log) => (
                            <TableRow
                                key={log.id}
                                className="h-14 hover:bg-muted/40 transition"
                            >
                                <TableCell className="font-medium">{log.id}</TableCell>

                                <TableCell>{log.correlation_id}</TableCell>

                                <TableCell>
                                    <Badge variant="secondary">{log.app_key}</Badge>
                                </TableCell>

                                <TableCell className="capitalize">
                                    {log.source_type}
                                </TableCell>

                                <TableCell>{log.api_name}</TableCell>

                                <TableCell>
                                    <Badge variant="outline">{log.method}</Badge>
                                </TableCell>

                                <TableCell className="font-mono text-xs">
                                    {log.endpoint}
                                </TableCell>

                                <TableCell>
                                    <Badge
                                        variant={log.status === "success" ? "default" : "destructive"}
                                    >
                                        {log.status}
                                    </Badge>
                                </TableCell>

                                <TableCell>{log.status_code}</TableCell>

                                <TableCell>{log.latency_ms} ms</TableCell>

                                <TableCell className="text-muted-foreground">
                                    {log.error_message ?? "–"}
                                </TableCell>

                                <TableCell>
                                    <Badge variant="outline">{log.environment}</Badge>
                                </TableCell>

                                <TableCell className="text-right text-muted-foreground">
                                    {log.created_at}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
