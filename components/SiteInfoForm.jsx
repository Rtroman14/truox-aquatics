import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SiteInfoForm({ formData, handleInputChange }) {
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                    id="siteName"
                    name="siteName"
                    value={formData.siteName}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                />
            </div>
        </div>
    );
}
