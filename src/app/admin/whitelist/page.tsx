"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Lock,
  Unlock,
  CheckCircle2,
  XCircle,
  Clock,
  User,
  Search,
  Trash2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

interface Candidate {
  id: string;
  discordTag: string;
  age: string;
  rpName: string;
  backstory: string;
  fearRpAns: string;
  date: string;
  status: "pending" | "approved" | "rejected";
}

export default function AdminWhitelistPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [filterStatus, setFilterStatus] = useState<"all" | "pending" | "approved" | "rejected">("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedStatus = localStorage.getItem("drilltown_whitelist_open");
    const timer = requestAnimationFrame(() => setIsOpen(savedStatus !== "false"));
    return () => cancelAnimationFrame(timer);
  }, []);

  // Load real applications from localStorage
  useEffect(() => {
    try {
      const storedApps = localStorage.getItem("drilltown_whitelist_applications");
      if (storedApps) {
        const parsed = JSON.parse(storedApps);
        if (Array.isArray(parsed)) {
          const timer = requestAnimationFrame(() => setCandidates(parsed));
          return () => cancelAnimationFrame(timer);
        }
      }
    } catch {
      // fallback
    }
  }, []);

  const saveApplicationsToStorage = (updatedCandidates: Candidate[]) => {
    try {
      localStorage.setItem("drilltown_whitelist_applications", JSON.stringify(updatedCandidates));
    } catch {
      // fallback
    }
  };

  const toggleSession = () => {
    const next = !isOpen;
    setIsOpen(next);
    localStorage.setItem("drilltown_whitelist_open", String(next));
    try {
      window.dispatchEvent(new CustomEvent("drilltown_whitelist_status_change", { detail: next }));
    } catch {
      // fallback
    }
  };

  const updateStatus = (id: string, newStatus: "approved" | "rejected") => {
    setCandidates((prev) => {
      const updated = prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c));
      saveApplicationsToStorage(updated);
      return updated;
    });
  };

  const deleteCandidate = (id: string) => {
    setCandidates((prev) => {
      const updated = prev.filter((c) => c.id !== id);
      saveApplicationsToStorage(updated);
      return updated;
    });
  };

  const filteredCandidates = candidates.filter((c) => {
    const matchesFilter = filterStatus === "all" || c.status === filterStatus;
    const matchesSearch =
      c.discordTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.rpName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHeader
        badge="Administration Staff"
        title="Gestionnaire des Whitelists"
        description="Consultez, validez ou refusez les candidatures RP des joueurs de DrillTown"
      />

      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Link href="/admin">
              <Button variant="outline" size="sm" className="flex items-center gap-2 text-xs">
                <ArrowLeft size={14} /> Retour au Dashboard Admin
              </Button>
            </Link>

            {/* Session Toggle Control */}
            <div className="flex items-center gap-3 bg-[#1a1a1a] p-2 rounded-xl border border-[#2a2a2a]">
              <span className="text-xs text-[#9ca3af] font-semibold pl-2">Session Whitelist:</span>
              <button
                onClick={toggleSession}
                className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all ${
                  isOpen
                    ? "bg-green-500/20 text-green-400 border border-green-500/40"
                    : "bg-red-500/20 text-red-400 border border-red-500/40"
                }`}
              >
                {isOpen ? <><Unlock size={14} /> OUVERTE</> : <><Lock size={14} /> FERMÉE</>}
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
              <div className="flex items-center justify-between text-[#9ca3af] text-xs font-semibold mb-2">
                TOTAL DOSSIERS <ShieldCheck size={16} className="text-[#7C3AED]" />
              </div>
              <span className="text-3xl font-bold text-white">{candidates.length}</span>
            </div>

            <div className="p-5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
              <div className="flex items-center justify-between text-amber-400 text-xs font-semibold mb-2">
                EN ATTENTE <Clock size={16} />
              </div>
              <span className="text-3xl font-bold text-amber-400">
                {candidates.filter((c) => c.status === "pending").length}
              </span>
            </div>

            <div className="p-5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
              <div className="flex items-center justify-between text-green-400 text-xs font-semibold mb-2">
                ACCEPTÉES <CheckCircle2 size={16} />
              </div>
              <span className="text-3xl font-bold text-green-400">
                {candidates.filter((c) => c.status === "approved").length}
              </span>
            </div>

            <div className="p-5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
              <div className="flex items-center justify-between text-red-400 text-xs font-semibold mb-2">
                REFUSÉES <XCircle size={16} />
              </div>
              <span className="text-3xl font-bold text-red-400">
                {candidates.filter((c) => c.status === "rejected").length}
              </span>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="relative w-full md:w-80">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
              <input
                type="text"
                placeholder="Rechercher par Discord ou Nom RP..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white text-xs focus:border-[#7C3AED] focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {[
                { id: "all", label: "Toutes les demandes" },
                { id: "pending", label: "En Attente" },
                { id: "approved", label: "Acceptées" },
                { id: "rejected", label: "Refusées" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterStatus(tab.id as "all" | "pending" | "approved" | "rejected")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    filterStatus === tab.id
                      ? "bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/30"
                      : "bg-[#1a1a1a] text-[#9ca3af] border border-[#2a2a2a] hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Candidate List Grid */}
          <div className="space-y-4">
            {filteredCandidates.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] text-[#9ca3af] text-sm">
                Aucune candidature correspondant à ces critères.
              </div>
            ) : (
              filteredCandidates.map((candidate) => (
                <motion.div
                  key={candidate.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#7C3AED]/40 transition-all space-y-4 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#2a2a2a] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] font-bold text-sm">
                        <User size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-white font-bold text-base">{candidate.rpName}</h3>
                          <span className="text-[#9ca3af] text-xs">({candidate.age} ans)</span>
                        </div>
                        <p className="text-[#7C3AED] text-xs font-semibold">Discord: {candidate.discordTag}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[#9ca3af] text-[11px] font-medium">{candidate.date}</span>

                      {candidate.status === "pending" && (
                        <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold flex items-center gap-1.5">
                          <Clock size={12} /> EN ATTENTE
                        </span>
                      )}
                      {candidate.status === "approved" && (
                        <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold flex items-center gap-1.5">
                          <CheckCircle2 size={12} /> ACCEPTÉE
                        </span>
                      )}
                      {candidate.status === "rejected" && (
                        <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold flex items-center gap-1.5">
                          <XCircle size={12} /> REFUSÉE
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Backstory & FearRP Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a]">
                      <span className="text-[#7C3AED] font-bold block mb-1 uppercase tracking-wider">
                        Lore & Backstory RP:
                      </span>
                      <p className="text-[#9ca3af] leading-relaxed">{candidate.backstory}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a]">
                      <span className="text-[#7C3AED] font-bold block mb-1 uppercase tracking-wider">
                        Réponse Test FearRP:
                      </span>
                      <p className="text-[#9ca3af] leading-relaxed">{candidate.fearRpAns}</p>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-end gap-3 pt-2 border-t border-[#2a2a2a]">
                    <Button
                      onClick={() => updateStatus(candidate.id, "approved")}
                      variant="premium"
                      size="sm"
                      className="text-xs bg-green-600 hover:bg-green-700 text-white flex items-center gap-1.5"
                    >
                      <CheckCircle2 size={14} /> Accepter
                    </Button>

                    <Button
                      onClick={() => updateStatus(candidate.id, "rejected")}
                      variant="outline"
                      size="sm"
                      className="text-xs border-red-500/40 text-red-400 hover:bg-red-500/20 flex items-center gap-1.5"
                    >
                      <XCircle size={14} /> Refuser
                    </Button>

                    <button
                      onClick={() => deleteCandidate(candidate.id)}
                      className="p-2 text-[#9ca3af] hover:text-red-400 transition-colors"
                      title="Supprimer la demande"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
